import React, {Component} from 'react'
import sprite from './cat.png'

function getFrameSize(hSteps, vSteps, width, height){
  const w = width / hSteps
  const h = height / vSteps

  return { w, h }
}

function getSpriteCoords(props, coords){
  var {row, col} = coords
  const {hSteps, direction, north, east, south, west} = props

  col++
  col >= hSteps && (col = 0)

  if(direction.north){
    return {row: north, col}
  } else if(direction.east){
    return {row: east, col}
  } else if(direction.south){
    return {row: south, col}
  } else if(direction.west) {
    return {row: west, col}
  }
}

const styles = {
  frame: {
    display: 'block',
    position: 'absolute',
    border: 'solid 1px black',
    backgroundColor: 'white',
  },
  image: {
    position: 'relative',
  }
}

var timer
export default class Sprite extends Component{
  state = { coords: { row: 0, col: 0 } }

  getSpriteCoords = () => {
    if(!timer){
      timer = setTimeout(() => {
        clearTimeout(timer)
        timer = null

        const coords = getSpriteCoords(this.props, this.state.coords)
        this.setState({ coords })

        this.getSpriteCoords()
      }, this.props.frequency)
    }
  }

  componentWillReceiveProps(props){
     if(props.isWalking){
       this.getSpriteCoords()
     } else {
       if(timer) {
         clearTimeout(timer)
         timer = null
       }
     }
  }

  render(){
    const {hSteps, vSteps, width, height, direction, frequency} = this.props
    const frameSize = getFrameSize(hSteps, vSteps, width, height)

    const frameStyles = { width: frameSize.w, height: frameSize.h, ...styles.frame }

    const imageStyles = {
      top: -Math.abs(frameSize.h * this.state.coords.row),
      left: -Math.abs(frameSize.w * this.state.coords.col),
      ...styles.image
    }

    return (
      <div style={frameStyles} onTouchEnd={this.props.onTouchEnd} onMouseOver={this.props.onMouseOver} onMouseEnter={this.props.onMouseEnter}>
        <img style={imageStyles} src={sprite} alt="Sprite"/>
      </div>
    )
  }
}
