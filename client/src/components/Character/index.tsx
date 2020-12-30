import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../../store/actions/character';
import { getFavorites, addFavCharacter, RemoveFavCharacter } from '../../store/actions/favorite';
import { RootState } from '../../store';
import { ICharacter } from '../../types';
import styles from './Character.module.css';
import Button from '../Button';
import notFound from '../../assets/notFound.jpeg';
import heart from '../../assets/heart.svg';
import heart_1 from '../../assets/heart_1.svg';
import spinner from '../../assets/tail-spin.svg';

const Status = ({ status }: { status: ICharacter['status'] }) => {
  const statusColor = status == 'Alive' ? styles.statusColorGreen : styles.statusColorRed;
  return (
    <div className={[styles.status, statusColor].join(' ')} />
  )
}

const Character = () => {
  const { id }: { id: string } = useParams();
  const dispatch = useDispatch()
  const character = useSelector((state: RootState) => state.character.characterSelected);
  const favorites = useSelector((state: RootState) => state.favorite.characters);
  const [isLoading, setIsLoading] = useState(true);
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    dispatch(getCharacter(Number(id)));
  }, [id]);

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  useEffect(() => {
    const isFav = Boolean(favorites.find(f => f.character_id == Number(id)));
    setIsFav(isFav);
  }, [favorites]);

  const addFav = () => {
    dispatch(addFavCharacter(Number(id)));
  }
  const removeFav = () => {
    dispatch(RemoveFavCharacter(Number(id)));
  }

  useEffect(() => {
    if (character) {
      const img = new Image();
      img.src = character.image;
      img.onload = () => {
        setIsLoading(false);
      }
    }
  }, [character]);

  const defaultImg = (event: React.ChangeEvent<HTMLImageElement>) => {
    event.target.src = notFound
  };

  return (
    <div className={styles.body}>
      { !character ? <img className={styles.spinner} src={spinner} alt='' onError={defaultImg} /> :
        (<>
          <div className={styles.content}>
            {
              isLoading ?
                <div className={styles.spinnerContainer}>
                  <img className={styles.spinner} src={spinner} alt='' onError={defaultImg} />
                </div> :
                <img className={styles.img} src={character.image} alt='' onError={defaultImg} />
            }
            <div className={styles.fav_group}>
              {
                isFav ?
                  <Button text='Remove Fav' onClick={removeFav} /> :
                  <Button text='Add Fav' onClick={addFav} />
              }
              <img className={styles.fav} src={isFav ? heart : heart_1} />
            </div>
            <div className={styles.title}>{character.name}</div>
            <div className={styles.subtitle}><Status status={character.status} />{character.status} - {character.species}</div>
            <div className={styles.label}>Origin</div>
            <div className={styles.text}>{character.origin.name}</div>
            <div className={styles.text}>Total Episodes: {character.episode.length}</div>
            <div className={styles.label}>Episodes List:</div>
            <ul>
              {
                character.episode.map(episode => <li>{episode}</li>)
              }
            </ul>
          </div>
        </>)
      }
    </div>
  );
};

export default Character;