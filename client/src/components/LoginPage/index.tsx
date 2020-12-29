import React from 'react';
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { openModalLogin } from '../../store/actions/modal';
import Button from '../Button';
import styles from './LoginPage.module.css';
const LoginPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const openLogin = () => {
    dispatch(openModalLogin())
  }

  return (
    <div className={styles.container}>
      <p>You must log in to view the page at {location.pathname}</p>
      <Button onClick={openLogin} text='Login' />
    </div>
  );
}

export default LoginPage;