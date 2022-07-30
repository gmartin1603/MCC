import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebApps from './components/WebApps';
import Web3 from './components/Web3';
import Links from './components/Links';
import About from './components/About';
import NotFound from './components/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="services" element={<Links/>}>
          <Route path="webApps" element={<WebApps/>}/>
          <Route path="web3" element={<Web3/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
        <Route path="about" element={<About/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
