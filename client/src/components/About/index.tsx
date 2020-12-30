import React from 'react';
import styles from './About.module.css';
import rick from '../../assets/rickCode.jpg';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={rick} alt="" />
      </div>
      <div className={styles.text}>
        <div className={styles.title}> About Arturo Liduena</div>
        <p>
          Software engineer / Developer. I am passionate about programming, write code quality, and constant learning. I enjoy working with the latest technologies. I am the type of developer who loves what he does. Self-learner that wish to constantly grow and improve as a software engineer.
        </p>

        <div className={styles.title}>
          About This Page (Frontend and Backend)
        </div>
        <p>
          An application, with backend(node.js / Express) and frontend(React / Redux), which consume the public API of Rick & Morty: https://rickandmortyapi.com. This API is consumed from your backend  application, not directly from the frontend.
        </p>
        <div className={styles.subtitle}>
          functionalities:
        </div>
        <ul>
          <li>
            Login : The users can be authenticated to consume the application. The auth keep the state between reloads.
          </li>
          <li>
            List all character’s view with name, status, origin, number of Episodes and an indicator to know if a character is in fav list.
          </li>
          <li>
            Detail character’s view .
          </li>
          <li>
            button to add the character to a fav list, in case the character is in fav list it can be removed from fav list.
          </li>
          <li>
            404 page.
          </li>
          <li>
            The user information for login and the fav list are stored in a DB (Posgres).
          </li>
          <li>
            we added some tests.
          </li>
          <li>
            A register page for new users.
          </li>
          <li>
            Backend pagination.
          </li>
          <li>
            Preload images and a loader.
          </li>
        </ul>

        <div className={styles.title}>
          Frontend
        </div>
        <p>
          The frontend was built in React with Hooks and Redux. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
          list of major frameworks and library that was used to built this project.
        </p>
        <ul>
          <li><a href="https://reactjs.org/" target="_blank">react</a></li>
          <li><a href="https://www.typescriptlang.org/" target="_blank">Typescript</a></li>
          <li><a href="https://redux.js.org/" target="_blank">Redux</a></li>
          <li><a href="https://redux-saga.js.org/" target="_blank">redux-saga</a></li>
          <li><a href="https://reactrouter.com/" target="_blank">react-router</a></li>
          <li><a href="https://react-redux.js.org/next/api/hooks" target="_blank">react-redux-hooks</a></li>
          <li><a href="https://reactjs.org/docs/hooks-intro.html" target="_blank">react-hooks</a></li>
          <li><a href="https://github.com/axios/axios" target="_blank">axios</a></li>
          <li><a href="https://jestjs.io/docs/en/getting-started.html" target="_blank">jest</a></li>
          <li><a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank">react testing library</a></li>
          <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">Flexbox css</a></li>
          <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank">css grid</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank">localstorage</a></li>
        </ul>
        <div className={styles.title}>
          Backend
        </div>
        <p>
          The backend was biult made in Express, list of major frameworks and library that was used to build this project.
        </p>
        <ul>
          <li><a href="https://nodejs.org/en/" target="_blank">node.js</a></li>
          <li><a href="https://expressjs.com/" target="_blank">express</a></li>
          <li><a href="https://github.com/expressjs/session" target="_blank">express-session</a></li>
          <li><a href="https://github.com/axios/axios" target="_blank">axios</a></li>
          <li><a href="http://www.passportjs.org/" target="_blank">passportjs</a></li>
          <li><a href="http://www.passportjs.org/packages/passport-local/" target="_blank">passport-local</a></li>
          <li><a href="https://github.com/brianc/node-postgres" target="_blank">pg</a></li>
          <li><a href="https://sequelize.org/" target="_blank">sequelize</a></li>
        </ul>
      </div>
    </div>)
}

export default About;