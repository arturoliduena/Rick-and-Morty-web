import React from 'react';
import styles from './Card.module.css';
import notFound from '../../assets/notFound.jpeg';

interface Props {
  image: string,
  infoElement: JSX.Element,
  extraInfoElement: JSX.Element,
  title: string,
}
const Card = ({ image, infoElement, extraInfoElement, title }: Props) => {
  const defaultImg = (event: React.ChangeEvent<HTMLImageElement>) => {
    event.target.src = notFound
  };
  return (
    <div className={styles.container}>
      <div className={styles.page_content} >
      <img className={styles.img} src={image} alt='' onError={defaultImg} />
        <div className={styles.card} >
          <div className={styles.content} >
          <h2 className={styles.title} >{title}</h2>
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