import React, { Component } from 'react'

import Moon from './Scenery/Moon'

import './Scenery.css'

export default class Scenery extends Component{
  render(){
    return (
      <div className="scenery">
        <Moon/>
      </div>
    )
  }
}
