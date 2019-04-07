import React,{ Component } from 'react';
import {List} from 'immutable';
import {Route, Switch,Link} from 'react-router-dom';
import Voting from './Voting';
import Results from './Results';

const pair = List.of('Trainspotting', '28 Days Later');

export default class App extends React.Component{
  render() {
    return (
      <div>
      <Switch>
        <Route exact path="/" render={(props)=> <Voting pair={pair}/>}/>
        <Route exact path="/results" component={Results}/>
      </Switch>
      </div>
    );
  }
};
