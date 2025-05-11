import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let basename = ''; 
if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
  basename = '/e-commerce-app'; 
}

root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);