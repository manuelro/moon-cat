import React from 'react';
import ReactDOM from 'react-dom';
import Scenery from './Scenery';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Scenery />, div);
});
