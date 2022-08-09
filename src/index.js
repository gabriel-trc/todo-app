import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { TodoProvider } from './contexts';
import { App } from './components/App';

ReactDOM.render(
  <TodoProvider>
    <App />
  </TodoProvider>,
  document.getElementById('root')
);