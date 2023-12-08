import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { initializeApp } from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyC-nnGtX-EmAqR6EIpE-BFha8woQAw8E1A",
  authDomain: "yanel-yapura-e-commerce.firebaseapp.com",
  projectId: "yanel-yapura-e-commerce",
  storageBucket: "yanel-yapura-e-commerce.appspot.com",
  messagingSenderId: "735170071345",
  appId: "1:735170071345:web:4c0e655acc348252ec7e10",
  measurementId: "G-WM3QC1GZ05"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
