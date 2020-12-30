import React from 'react';
import styles from './Home.module.css';
import cover from '../../assets/rickandmorty.jpg';
const Home = () => {
  return <div>
    <img className={styles.cover} src={cover} alt="" />
    <div className={styles.text}>
      This page consumes the Rick & Morty public API: <a href="https://rickandmortyapi.com" target="_blank">https://rickandmortyapi.com</a>. you can see all the characters, episodes and locations, you must register and log in to have access to all the information
  </div>
  </div>
}

export default Home;