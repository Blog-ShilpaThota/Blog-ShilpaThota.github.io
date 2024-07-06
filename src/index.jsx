import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tailwindcss/tailwind.css';
import './styles/index.css';
import { ItemProvider } from './contains/ItemContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { HashRouter } from "react-router-dom";



const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <HashRouter>
  <GoogleOAuthProvider clientId="497377606489-h6ce2a841cpaukg38mt815q2rufs6g5p.apps.googleusercontent.com">
        <ItemProvider>
    <App />
    </ItemProvider>
  </GoogleOAuthProvider>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
