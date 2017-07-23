import React, { Component } from 'react'

import Section from './Body/Section'

import './Body.css'

export default class Body extends Component{
  render(){
    return (
      <ul className="body">
        <li className="body__list-item">
          <Section
            title="Sizing of elements in multiple devices"
            text="In order for the moon to have the same size all devices, CSS3 cm unit should be used. The cm measurement unit is used when an aproximation to the real world is needed. Besided cm we could've also used in (inches), or mm (millimeters)."/>
        </li>

        <li className="body__list-item">
          <Section
            title="Transitions"
            text="Note that all the transitions have been enabled, this is only for the sake of simplicity during the creation of the morphing effect, in production it is always discouraged to enable all transitions since this will generate too many computations and DOM repaintings. Resources are very valuable."/>
        </li>

        <li className="body__list-item">
          <Section
            title="Going further"
            text="Further optimizations can be done: improve unit testing, feature dectection for CSS transition support, improve layout and hiding/showing of elements, consider the use of animations instead, create a cross-browser version that can emulate the very same transition effect with older technologies (JavaScript animations)"/>
        </li>
      </ul>
    )
  }
}
