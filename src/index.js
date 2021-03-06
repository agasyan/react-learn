import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Component
// import App from './component/App';
import NavigationBar from './component/NavigationBar'
import * as serviceWorker from './serviceWorker';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>    
    <NavigationBar />

  </React.StrictMode>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
