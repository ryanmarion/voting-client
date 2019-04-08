import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, hashHistory} from 'react-router-dom';
import App from './components/App';
import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import {List} from 'immutable';

//const pair = List.of('Trainspotting', '28 Days Later');

const store = createStore(reducer);
store.dispatch({
  type:'SET_STATE',
  state:{
    vote:{
      pair:['Sunshine','28 Days Later'],
      tally:{Sunshine:2}
    }
  }
});


ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById('app')
);
