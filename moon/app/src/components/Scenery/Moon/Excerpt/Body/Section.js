import React, {Component} from 'react'

import Title from './Title'
import Text from './Text'

export default class Section extends Component{
  render(){
    return(
      <div className="seciton">
        <Title>{this.props.title}</Title>
        <Text>{this.props.text}</Text>
      </div>
    )
  }
}
