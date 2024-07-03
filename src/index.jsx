import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tailwindcss/tailwind.css';
import './styles/index.css';
import { ItemProvider } from './contains/ItemContext';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <BrowserRouter>
  <GoogleOAuthProvider clientId="836365072370-l9uskggtbd3cqeo2q2l9ktv5uohb1197.apps.googleusercontent.com">
        <ItemProvider>
    <App />
    </ItemProvider>
  </GoogleOAuthProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
