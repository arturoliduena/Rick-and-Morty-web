import React, { useEffect } from 'react';
import Header from './components/Header';
import Login from './components/Modal/Login';
import Register from './components/Modal/Register';
import Body from './components/Body';
import styles from './App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { meAuth } from './store/actions/auth';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const isOpenLogin = useSelector((state: RootState) => state.modal.isOpenLogin);
  const isOpenRegister = useSelector((state: RootState) => state.modal.isOpenRegister);
  useEffect(()=> {
    dispatch(meAuth())
  },[])
  return (
    <Router>
      <Switch>
        <div className={styles.App}>
          <Header />
          <Body />
          {
            isOpenLogin ? <Login /> : null
          }
          {
            isOpenRegister ? <Register /> : null
          }
        </div>
      </Switch>
    </Router>
  );

};

export default App;
