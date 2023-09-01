import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextProvider from './contexts/ThemeContext'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const container = document.getElementById('root');
const root = createRoot(container); // create a root
root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
); // render app to root

reportWebVitals();
