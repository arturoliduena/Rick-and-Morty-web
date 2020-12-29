import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../store/actions/character';
import { RootState } from '../../store';
import Card from '../Card';
import { ICharacter } from '../../types';
import styles from './Characters.module.css';
import Button from '../Button';

interface PropsCharacter {
  character: ICharacter,
}

const Status = ({ status }: { status: ICharacter['status']}) => {
  const statusColor = status == 'Alive' ? styles.statusColorGreen : styles.statusColorRed;
  return (
    <div className={[styles.status, statusColor].join(' ')}/>
  )
}
const buildInfo = ({ name, status, species, origin, episode }: ICharacter) => {
  return (
    <div className={styles.content}>
      <div className={styles.title}>{name}</div>
      <div className={styles.subtitle}><Status status={status}/>{status} - {species}</div>
      <div className={styles.label}>Origin</div>
      <div className={styles.text}>{origin.name}</div>
      <div className={styles.label}>Episodes</div>
      <div className={styles.text}>{episode.length}</div>
    </div>
  )
}

const buildExtaInfo = ({ id }: ICharacter) => {
  return (
    <div className={styles.button_group}>
      <Button text='Add Fav' onClick={() => console.log('click')} />
      <Button text='Remove Fav' onClick={() => console.log('click')} />
    </div>
  )
}

const Character = ({ character }: PropsCharacter) => {
  const infoElement = buildInfo(character)
  const extraInfoElement = buildExtaInfo(character)
  return <Card image={character.image} infoElement={infoElement} extraInfoElement={extraInfoElement} title='Fav' />
};

const Characters = () => {
  const dispatch = useDispatch()
  const characters = useSelector((state: RootState) => state.character.characters);
  const info = useSelector((state: RootState) => state.character.info);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getCharacters(page));
  }, [page])

  const onPageChange = (nextPage: number) => {
    if (nextPage && nextPage <= info.pages) {
      setPage(nextPage);
    }
  }

  return (
    <div className={styles.body}>
      {
        characters.map((character: ICharacter) => <Character key={character.id} character={character} />)
      }
    </div>
  );
};

export default Characters;