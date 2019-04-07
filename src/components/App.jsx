import React,{ Component } from 'react';
import {List,Map} from 'immutable';
import {Route, Switch,Link} from 'react-router-dom';
import Voting from './Voting';
import Results from './Results';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

export default class App extends React.Component{
  render() {
    return (
      <div>
      <Switch>
        <Route exact path="/" render={(props)=> <Voting {...props} pair={pair}/>}/>
        <Route exact path="/results" render={(props)=><Results {...props} pair={pair} tally={tally}/>}/>
      </Switch>
      </div>
    );
  }
};
