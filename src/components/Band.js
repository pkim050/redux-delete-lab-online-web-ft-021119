import React, { Component } from 'react';

class Band extends Component {

  render() {
    return (
      <div>
<<<<<<< HEAD
        <li>
          {this.props.band.name}
          <button onClick={() => {this.props.deleteBand(this.props.band.name)}}>Delete</button>
        </li>
=======
        {this.props.band.name}
        <button onClick={() => {this.props.deleteBand(this.props.band.name)}}>Delete</button>
>>>>>>> bcb6a6cf52ab6b9cd43bf6dfd2a2f755de8f718e
      </div>
    );
  }
};

export default Band;
