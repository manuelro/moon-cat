import React from 'react';
import ReactDOM from 'react-dom';
import Moon from './Moon';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Moon />, div);
});
