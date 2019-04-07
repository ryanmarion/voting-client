import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, hashHistory} from 'react-router-dom';
import App from './components/App';
import Voting from './components/Voting';
import Results from './components/Results';
import {List} from 'immutable';

//const pair = List.of('Trainspotting', '28 Days Later');

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
