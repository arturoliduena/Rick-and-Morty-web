import React from 'react';
import {
  Route,
  useLocation,
  Switch,
} from "react-router-dom";
import {useSelector } from 'react-redux';
import { RootState } from '../../store';
import LoginPage from '../LoginPage';
import Characters from '../Characters';
import Character from '../Character';
import styles from './Body.module.css';
const Body = () => {
  return (
    <div className={styles.body}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <PrivateRoute path="/characters" component={Characters} />
        <PrivateRoute path="/character/:id" component={Character} />
        <PrivateRoute path="/locations" component={Locations} />
        <PrivateRoute path="/episodes" component={Episodes} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Locations() {
  return (
    <div>
      <h2>Locations</h2>
    </div>
  );
}

function Episodes() {
  return (
    <div>
      <h2>Episodes</h2>
    </div>
  );
}
function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code> 404 page!
      </h3>
    </div>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
interface Props {
  component: React.FunctionComponent,
  path: string,
}
function PrivateRoute({ component, path }: Props) {
  const isLogin = useSelector((state: RootState) => state.auth.authorized);
  return (
    <Route path={path} component={isLogin ? component : LoginPage}></Route>
  )
};

export default Body;