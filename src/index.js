import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebApps from './pages/WebApps';
import Web3 from './pages/Web3';
import Links from './components/Links';
import About from './pages/About';
import NotFound from './components/NotFound';
import { AppProvider } from './context/AppState';
import Tiles from './components/Tiles';
import Projects from './pages/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider >
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Tiles/>}/>
            <Route path="skills" element={<Tiles/>}>
              <Route path="webApps" element={<WebApps/>}/>
              <Route path="web3" element={<Web3/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Route>
            <Route path="reviews" element={<Links/>}>
              <Route path="webApps" element={<WebApps/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Route>
            <Route path="spotLight" element={<Projects/>}>
              {/* <Route path="projects" element={<Projects/>}/> */}
              <Route path="*" element={<NotFound/>}/>
            </Route>
            <Route path="about" element={<About/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
