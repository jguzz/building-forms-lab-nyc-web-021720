// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addBand(this.state)
    this.setState({name: ''})
  }
  render() {
    return(
      <div>
        Band Input
        <form  onSubmit={this.handleOnSubmit}>
          <input onChange={this.handleChange}type="text" name="name" value={this.state.name}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
