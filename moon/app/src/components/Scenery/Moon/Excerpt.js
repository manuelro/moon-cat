import React, { Component } from 'react'

import CloseButton from './Excerpt/CloseButton'
import Heading from './Excerpt/Heading'
import Div from './Excerpt/Div'
import Body from './Excerpt/Body'

import './Excerpt.css'

export default class Excerpt extends Component{
  render(){
    const className = `${this.props.className || ''} excerpt`

    return (
      <div className={className}>
        <CloseButton onClick={this.props.toggleMorphing}/>
        <Heading/>
        <Div/>
        <Body/>
      </div>
    )
  }
}
