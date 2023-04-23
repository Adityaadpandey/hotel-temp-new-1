import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{ inject } from '@vercel/analytics';

const root = ReactDOM.createRoot(document.getElementById('root'));
inject();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

