import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const firebaseConfig = {
  apiKey: "AIzaSyBvKLJcQjaPIUIjot45-NBjGNptS3ik4qk",
  authDomain: "ifc-frontend.firebaseapp.com",
  projectId: "ifc-frontend",
  storageBucket: "ifc-frontend.appspot.com",
  messagingSenderId: "255936102337",
  appId: "1:255936102337:web:04b6e85deeccaab4cf3940"
};

initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

