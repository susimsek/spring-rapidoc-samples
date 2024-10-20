import React from 'react';
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './config/i18n'; // Import i18n configuration to initialize it globally
import App from './App'; // Main App component

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);
root.render(<App />);
