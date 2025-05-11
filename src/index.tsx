import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let basename = ''; // Domyślnie pusta dla lokalnego developmentu
if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
  // Ustaw basename tylko wtedy, gdy nie jesteś na localhost
  basename = '/e-commerce-shop'; // Zmień na nazwę swojego repozytorium
}

root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);