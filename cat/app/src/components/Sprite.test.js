import React from 'react';
import ReactDOM from 'react-dom';
import Sprite from './Sprite';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sprite />, div);
});
