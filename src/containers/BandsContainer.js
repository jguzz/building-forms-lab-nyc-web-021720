import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'

class BandsContainer extends Component {
  renderBands = () => {
    return this.props.bands.map(band => <li>{band}</li>)
  }
  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => dispatch({type: 'ADD_BAND',  band}) 
  };
}

export default connect (state => ({bands: state.bands}), mapDispatchToProps) (BandsContainer)
