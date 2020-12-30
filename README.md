<!-- PROJECT -->
<h2 align="center">Rick & Morty Web/Api</h2>

<!-- ABOUT THE PROJECT -->
## About The Project

An application, with backend(node.js / Express) and frontend(React / Redux), which consume the public API of Rick & Morty: https://rickandmortyapi.com. This API is consumed from your backend  application, not directly from the frontend. 
functionalities:

• Login : The users can be authenticated to consume the application. The auth keep the state between reloads.

• List all character’s view with name, status, origin, number of Episodes and an indicator to know if a character is in fav list. 

• Detail character’s view .

• button to add the character to a fav list, in case the character is in fav list it can be removed from fav list.

• 404 page.

• The user information for login and the fav list are stored in a DB (Posgres).

• we added some tests.

• A register page for new users.

• Backend pagination.

• Preload images and a loader.

### Frontend
The frontend was built in React with Hooks and Redux. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
list of major frameworks and library that was used to built this project.
* [react](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Redux](https://redux.js.org/)
* [redux-saga](https://redux-saga.js.org/)
* [react-router](https://reactrouter.com/)
* [react-redux-hooks](https://react-redux.js.org/next/api/hooks)
* [react-hooks](https://reactjs.org/docs/hooks-intro.html)
* [axios](https://github.com/axios/axios)
* [jest](https://jestjs.io/docs/en/getting-started.html)
* [react testing library](https://testing-library.com/docs/react-testing-library/intro/)
* [Flexbox css](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [css grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

### Backend
The backend was biult made in Express, list of major frameworks and library that was used to build this project.
* [node.js](https://nodejs.org/en/)
* [express](https://expressjs.com/)
* [express-session](https://github.com/expressjs/session)
* [axios](https://github.com/axios/axios)
* [passportjs](http://www.passportjs.org/)
* [passport-local](http://www.passportjs.org/packages/passport-local/)
* [pg](https://github.com/brianc/node-postgres)
* [sequelize](https://sequelize.org/)

### Demo
* Login, Logout and register <br/>
![](gif/demo.gif)

* Characters list and pagination <br/>
![](gif/demo_.gif)

* Save in Favorite list <br/>
![](gif/demo_.gif)

* Responsive <br/>
![](gif/demo_reponsive.gif)

* Persistent <br/>
![](gif/demo_persist_data.gif)


### Testing
This project has tests on components, reducer, functions/utils and actions, run `yarn test`.

<!-- GETTING STARTED -->
## Getting Started

To clone and run this application.

### Prerequisites

you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com) or you can use [yarn](https://classic.yarnpkg.com/en/docs/install/)) installed on your computer. From your command line:

### Installation

1. Clone this repo
```sh
git clone https://github.com/arturoliduena/Rick-and-Morty-web.git
```

2. Go into the repository
```sh
cd Rick-and-Morty-web
```

### Frontend 
3. Go into the frontend project from the project root
```sh
cd client
```

4. install package
```sh
yarn
```
or
```sh
npm install
```

5. run frontend
```sh
yarn start
```
or
```sh
npm start
```

### Backend 
Pre-setting
we use postgres to store our data in a SQL database and Sequelize as Node.js ORM for Postgres, you need:
install [Postgres](https://www.postgresql.org/download/)


6. Create a db user
e.g
```sh
$ psql postgres
```
```sh
postgres=# CREATE USER rick WITH PASSWORD '123456' CREATEDB;
CREATE ROLE
```

7. Crete an user and a database
e.g
```sh
$ psql postgres
```
```sh
postgres=# CREATE DATABASE rickandmorty;
```

see list of databases
```sh
$ psql --list
```
List of databases
Name | Owner | Encoding | Collate | Ctype | Access privileges
--------------- | ------- | ---------- | --------- | ------- | -------------------
 development   | artur | UTF8     | C       | C     | 
 postgres      | artur | UTF8     | C       | C     | 
 rickandmorty  | artur | UTF8     | C       | C     | 
 template0     | artur | UTF8     | C       | C     | =c/artur + artur=CTc/artur
 template1     | artur | UTF8     | C       | C     | =c/artur + artur=CTc/artur
(6 rows)

8. update `/api.env` file

Your user name, user password and database name must be set in `.env` file.
```txt
PORT=3001
DB_NAME='rickandmorty'
DB_HOST='localhost'
DB_USERNAME='rick'
DB_PASSWORD='123456'
DB_DIALECT='postgres'
```

https://www.tutorialspoint.com/postgresql/postgresql_create_database.htm

9. Go into the backend project from the project root
```sh
cd api
```

10. install package
```sh
yarn
```
or
```sh
npm install
```

11. run backend
```sh
yarn dev
```
or
```sh
npm dev
```
