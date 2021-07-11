import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Notificaciones } from './components/Notificaciones';

import serviceWorker from "./serviceWorker"
ReactDOM.render(
  <React.StrictMode>
    <Notificaciones />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker();
