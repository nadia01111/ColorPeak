import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { ColorsProvider } from "../src/components/ColorsContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorsProvider>
       <App />
    </ColorsProvider>
  </React.StrictMode>
);

