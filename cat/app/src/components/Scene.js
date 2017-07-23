import React, {Component} from 'react'

import Sprite from './Sprite'

import './Scene.css'

const styles = {
  pointer: {
    // position: 'absolute',
    // left: 10,
    // top: 10,
  }
}

function getPointerDirection(prevPointer, nextPointer){
  var north = false, west = false, south = false, east = false

  const xDelta = prevPointer.x - nextPointer.x
  const yDelta = prevPointer.y - nextPointer.y
  const greaterDelta = Math.max(Math.abs(xDelta), Math.abs(yDelta))

  if(Math.abs(xDelta) > Math.abs(yDelta)){
    //The pointer has a horizontal direction
    nextPointer.x > prevPointer.x && (east = true) //The pointer is heading east
  } else {
    //The pointer has a vertical direction
    nextPointer.y > prevPointer.y && (south = true) //The pointer is heading south
  }

  west = !east //Therefore is not heading west
  north = !south //Therefore is not heading north

  return { north, west, south, east }
}

export default class Scene extends Component{
  state = { pointer: { x: 0, y: 0 }, direction: {}, isMovingSprite: false, isWalking: false }

  handleOnMouseMove = (e) => {
    const x = e.pageX
    const y = e.pageY
    const pointer = { x, y }

    const direction = getPointerDirection(this.state.pointer, pointer)

    this.setState({ pointer, direction })
  }

  toggleWalking = () => {
    const isWalking = !this.state.isWalking
    this.setState({ isWalking })
  }

  moveSprite = () => {}

  handleOnMouseEnter = () => {
    console.log('onMouseEnter')
  }

  handleOnMouseOver = () => {
    console.log('onMouseOver')
  }

  handleOnTouchEnd = () => {
    console.log('onTouchEnd')
  }

  render(){
    return(
      <div className="scene" onMouseMove={this.handleOnMouseMove}>
        <button onClick={this.toggleWalking}>Toogle walking</button>
        {this.state.isWalking ? 'true' : 'false'}

        <div style={styles.pointer}>x: {this.state.pointer.x} @ y: {this.state.pointer.y}</div>

        {this.state.direction.south ? 'south' : 'north'}
        {this.state.direction.west ? '| west' : '| east'}

        <Sprite
          hSteps={3}
          vSteps={4}

          width={92}
          height={126}

          frequency={1000}

          south={0}
          west={1}
          east={2}
          north={3}

          direction={this.state.direction}

          onMouseEnter={this.handleOnMouseEnter}
          onMouseOver={this.handleOnMouseOver}
          onTouchEnd={this.handleOnTouchEnd}

          isWalking={this.state.isWalking}
        />

      </div>
    )
  }
}
