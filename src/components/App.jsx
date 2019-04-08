import React,{ Component } from 'react';
import {List,Map} from 'immutable';
import {Route, Switch,Link} from 'react-router-dom';
import {VotingContainer} from './Voting';
import {ResultsContainer} from './Results';

//const pair = List.of('Trainspotting', '28 Days Later');
//const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

export default class App extends React.Component{
  render() {
    return (
      <div>
      <Switch>
        <Route exact path="/" render={(props)=> <VotingContainer {...props}/>}/>
        <Route exact path="/results" render={(props)=><ResultsContainer {...props}/>}/>
      </Switch>
      </div>
    );
  }
};
