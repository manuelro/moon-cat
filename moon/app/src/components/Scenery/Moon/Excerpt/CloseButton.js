import React, { Component } from 'react'

import './CloseButton.css'

export default class CloseButton extends Component{
  render(){
    return (
      <div className="close-button" onClick={this.props.onClick}>
        <img alt="Close" className="close-button__icon" src={process.env.PUBLIC_URL + '/icons/close.svg'} />
      </div>
    )
  }
}
