import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../../store/actions/character';
import { RootState } from '../../store';
import Card from '../Card';
import { ICharacter } from '../../types';
import styles from './Characters.module.css';

interface Props {
  characters: string[],
}

interface PropsCharacter {
  character: ICharacter,
}

const Character = ({ character }: PropsCharacter) => {
  return (
    character ? <Card item={character}/> :
      null
  )
};

const Characters = () => {
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  const dispatch = useDispatch()
  const characters = useSelector((state: RootState) => state.character.characters);
  const info = useSelector((state: RootState) => state.character.info);
  const [page, setPage] = useState(1);
  
  // const navigator = (id: number) => () => navigation.navigate('Character', { itemId: id});

  useEffect(() => {
    dispatch(getCharacters(page));
  }, [page])

  const onPageChange = (nextPage: number) => {
    if(nextPage && nextPage <= info.pages){
      setPage(nextPage);
    }
  }


  return (
    <div className={styles.body}>
          {
            characters.map((character: ICharacter) => <Character key={character.id} character={character}/>)
          }
    </div>
  );
};

export default Characters;