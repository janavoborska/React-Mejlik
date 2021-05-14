import React from 'react';
import { render } from 'react-dom';
import Inbox from './Inbox';
import './style.css';

const App = () => (
  <div className="mail">
    <Inbox account="radovan.holatko@mejlik.cz" messages={5} />
  </div>
);

render(<App />, document.querySelector('#app'));
