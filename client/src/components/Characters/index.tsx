import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { getCharacters } from '../../store/actions/character';
import { getFavorites, addFavCharacter, RemoveFavCharacter } from '../../store/actions/favorite';
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
const BuildInfo = ({ id, name, status, species, origin, episode }: ICharacter) => {
  let history = useHistory();
  const onClick = () => {
    history.push(`/character/${id}`);
  }
  return (
    <div className={styles.content}>
      <div className={styles.title} onClick={onClick}>{name}</div>
      <div className={styles.subtitle}><Status status={status}/>{status} - {species}</div>
      <div className={styles.label}>Origin</div>
      <div className={styles.text}>{origin.name}</div>
      <div className={styles.label}>Episodes</div>
      <div className={styles.text}>{episode.length}</div>
    </div>
  )
}

const BuildExtaInfo = ({ id }: ICharacter, isFav: boolean) => {
  const dispatch = useDispatch()
  const addFav = () => {
    dispatch(addFavCharacter(id));
  }
  const removeFav = () => {
    dispatch(RemoveFavCharacter(id));
  }
  return (
    <div className={styles.button_group}>
      {
        isFav ?
        <Button text='Remove Fav' onClick={removeFav} /> :
        <Button text='Add Fav' onClick={addFav} /> 
      }
    </div>
  )
}

const Character = ({ character }: PropsCharacter) => {
  const favorites = useSelector((state: RootState) => state.favorite.characters);
  const isFav = Boolean(favorites.find(f => f.character_id == character.id));
  const infoElement = BuildInfo(character);
  const extraInfoElement = BuildExtaInfo(character, isFav);
  return <Card image={character.image} infoElement={infoElement} extraInfoElement={extraInfoElement} isFav={isFav} />
};

const Characters = () => {
  const dispatch = useDispatch()
  const characters = useSelector((state: RootState) => state.character.characters);
  const next = useSelector((state: RootState) => state.character.info.next);
  const prev = useSelector((state: RootState) => state.character.info.prev);
  const pages = useSelector((state: RootState) => state.character.info.pages);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getCharacters(page));
  }, [page]);

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  const onPageChange = (page: string | null = '') => {
  const nextPage = Number(page && page.replace('https://rickandmortyapi.com/api/character/?page=', ''))
  if (nextPage && nextPage <= pages) {
    setPage(nextPage);
    }
  }

  return (
    <>
    <div className={styles.body}>
      {
        characters.map((character: ICharacter) => <Character key={character.id} character={character} />)
      }
    </div>
    <div className={styles.pages}>
      <Button text='Prev' onClick={() => onPageChange(prev)} /> 
      <span className={styles.pagesInfo}> page { page } of { pages } pages </span> 
      <Button text='Next' onClick={() => onPageChange(next)} />
    </div>
    </>
  );
};

export default Characters;