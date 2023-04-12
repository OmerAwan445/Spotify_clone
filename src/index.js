import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DataLayerProvider } from './DataLayer/DataLayerProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataLayerProvider>
  <App />
  </DataLayerProvider>
);

