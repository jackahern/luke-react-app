import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import 'tachyons';
import { girlfriends } from './girlfriends';

ReactDOM.render(
  <App girlfriends={girlfriends}/>,
  document.getElementById('root')
);
