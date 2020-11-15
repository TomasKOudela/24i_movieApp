import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {MovieState} from './context/Context'

ReactDOM.render(
  <React.StrictMode>
    <MovieState>
       <App />
    </MovieState> 
  </React.StrictMode>,
  document.getElementById('root')
);


