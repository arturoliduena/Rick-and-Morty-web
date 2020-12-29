import React from 'react';
import styles from './Header.module.css';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { openModalLogin, openModalRegister } from '../../store/actions/modal';
import { logout } from '../../store/actions/auth';
import { sortCard } from '../../store/actions/card';
import { OrderBy, Order } from '../../types';
import Dropdown from '../Dropdown/Dropdown';
import logo from '../../assets/rick-and-morty.png';

interface Props {
}

const Header = (props: Props) => {
  const isLogin = useSelector((state: RootState) => state.auth.authorized);
  const username = useSelector((state: RootState) => state.auth.user?.username);

  const dispatch = useDispatch();

  const openLogin = () => {
    dispatch(openModalLogin())
  }

  const openRegister = () => {
    dispatch(openModalRegister())
  }

  const sort = (orderBy: OrderBy, order: Order) => {
    dispatch(sortCard(orderBy, order))
  }

  const handleLogout = () => {
    dispatch(logout())

  }

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="Rick and Morty" />
      <Dropdown />
      <div className={styles.button_group}>
        {
          !isLogin ?
            <>
              <Button onClick={openLogin} text='Login' />
              <Button onClick={openRegister} text='Register' />
            </> :
            <>
              <div className={styles.username}>Hi {username}</div>
              <Button onClick={handleLogout} text='Logout' />
            </>
        }
      </div>
    </header>
  )
};

export default Header;