import React from 'react';

var createReactClass = require('create-react-class');

module.exports=createReactClass({
  getPair: function() {
      return this.props.pair || [];
    },
    render: function() {
      return <div className="voting">
        {this.getPair().map(entry =>
          <button key={entry}>
            <h1>{entry}</h1>
          </button>
        )}
      </div>;
    }
});
