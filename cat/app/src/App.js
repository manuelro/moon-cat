import React, { Component } from 'react'

// Components
import Scene from './components/Scene'

// Styles
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Scene sensitivity={5} minSteps={5} maxSteps={10}/>
      </div>
    );
  }
}

export default App
