import React, { useEffect, useState } from 'react';
import styles from './Card.module.css';
import notFound from '../../assets/notFound.jpeg';
import heart from '../../assets/heart.svg';
import heart_1 from '../../assets/heart_1.svg';
import spinner from '../../assets/tail-spin.svg';

interface Props {
  image: string,
  infoElement: JSX.Element,
  extraInfoElement: JSX.Element,
  isFav: boolean,
}


const Card = ({ image, infoElement, extraInfoElement, isFav }: Props) => {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = image; // by setting an src, you trigger browser download
  
    img.onload = () => {
      // when it finishes loading, update the component state
      setIsLoading(false);
    }
  }, []);

  const defaultImg = (event: React.ChangeEvent<HTMLImageElement>) => {
    event.target.src = notFound
  };
  return (
    <div className={styles.container}>
      <div className={styles.page_content} >
      {
        isLoading ? 
        <div className={styles.spinnerContainer}>
          <img className={styles.spinner} src={spinner} alt='' onError={defaultImg} /> 
        </div> :
        <img className={styles.img} src={image} alt='' onError={defaultImg} />
      }
      <img className={styles.fav} src={isFav ? heart : heart_1} />
        <div className={styles.card} >
          <div className={styles.content} >
          <h2 className={styles.title}>Fav</h2>
            { extraInfoElement }
          </div>
        </div>
      </div>
      <div className={styles.description}>
        { infoElement }
      </div>
    </div>
  );
};

export default Card;