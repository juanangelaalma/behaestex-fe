import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PreviewProvider } from './contexts/PreviewContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PreviewProvider>
      <App />
    </PreviewProvider>
  </React.StrictMode>
);

reportWebVitals();
