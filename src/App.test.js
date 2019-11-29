import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NetworkJSApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NetworkJSApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
