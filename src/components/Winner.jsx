import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class Winner extends React.PureComponent{
  render() {
    return (<div className="winner">
      Winner is {this.props.winner}!
    </div>)
  }
};
