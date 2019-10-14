import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band'
import { connect } from 'react-redux'

class BandsContainer extends Component {
<<<<<<< HEAD
  renderBands = () => {
    return this.props.bands.map((band) => <Band deleteBand={this.props.deleteBand} key={band.id} band={band}/>)
  }
=======
  rednerBands = () => this.props.bands.map((band) => <Band deleteBand={this.props.deleteBand} key={band.id} text={band})
>>>>>>> bcb6a6cf52ab6b9cd43bf6dfd2a2f755de8f718e

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
<<<<<<< HEAD
        <ul>
          {this.renderBands()}
        </ul>
=======
        {this.renderBands()}
>>>>>>> bcb6a6cf52ab6b9cd43bf6dfd2a2f755de8f718e
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
<<<<<<< HEAD
  addBand: name => dispatch({ type: "ADD_BAND", name }),
=======
  addBand: name => dispatch({ type: "ADD_BAND", name })
>>>>>>> bcb6a6cf52ab6b9cd43bf6dfd2a2f755de8f718e
  deleteBand: name => dispatch({ type: "DELETE_BAND", name})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
