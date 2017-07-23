import React, { Component } from 'react'

import Excerpt from './Moon/Excerpt'

import './Moon.css'

const styles = {
  button: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'transparent',
    position: 'absolute',
  }
}

export default class Moon extends Component{
  state = { morphed: false }

  toggleMorphing = () => {
    const morphed = !this.state.morphed;
    this.setState({ morphed })
  }

  render(){
    const className = this.state.morphed ? ' moon--morphed ' : '';

    return (
      <div className={`moon ${className}`}>
        {!this.state.morphed ? <div style={styles.button} onClick={this.toggleMorphing}></div> : null}
        <Excerpt toggleMorphing={this.toggleMorphing} className="moon__excerpt"/>
      </div>
    )
  }
}
