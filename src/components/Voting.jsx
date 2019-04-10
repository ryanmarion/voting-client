import React from 'react';
import Winner from './Winner';
import {connect} from 'react-redux';
import Vote from './Vote';
import * as actionCreators from '../action_creators';

export class Voting extends React.PureComponent{
  render() {
    return <div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>;
  }
};

function mapStateToProps(state){
  return{
    pair:state.getIn(['vote','pair']),
    hasVoted:state.getIn(['myVote','entry']),
    winner:state.get('winner')
  };
}

export const VotingContainer = connect(
  mapStateToProps,
  actionCreators
)(Voting);
