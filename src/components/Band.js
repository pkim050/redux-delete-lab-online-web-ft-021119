import React, { Component } from 'react';

class Band extends Component {

  render() {
    return (
      <div>
        <li>
          {this.props.band.name}
          <button onClick={() => {this.props.deleteBand(this.props.band.name)}}>Delete</button>
        </li>
      </div>
    );
  }
};

export default Band;
