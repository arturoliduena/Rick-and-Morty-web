import React, { useState } from 'react';
import styles from './Dropdown.module.css';
import { useDispatch } from 'react-redux';
import { sortCard } from '../../store/actions/card';
import { OrderBy, Order } from '../../types';

import { useLocation, useHistory } from "react-router-dom";

const Dropdown = () => {
  const [orderName, setOrderName] = useState('');
  const dispatch = useDispatch();
  let location = useLocation();
  let history = useHistory();

  const handleClick = (goTo: string) => {
    history.push(`/${goTo}`);
  }

  const sort = (orderBy: OrderBy, order: Order, name: string) => {
    setOrderName(name)
    dispatch(sortCard(orderBy, order))
  }

  return (
    <div className={styles.select_ctr}>
      <div className={styles.input_preview}>{location.pathname === '/' ? '/home' : location.pathname }</div>
      <div className={styles.options}>
        <div className={styles.input} onClick={() => handleClick('')}>Home</div>
        <div className={styles.input} onClick={() => handleClick('about')}>About</div>
        <div className={styles.input} onClick={() => handleClick('characters')}>Characters</div>
        <div className={styles.input} onClick={() => handleClick('locations')}>Locations</div>
        <div className={styles.input} onClick={() => handleClick('episodes')}>Episodes</div>
      </div>
    </div>
  )
};

export default Dropdown;