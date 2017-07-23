import React, {Component} from 'react'

import './Text.css'

export default class Title extends Component{
  render(){
    return(
      <div className="text">{this.props.children}</div>
    )
  }
}
