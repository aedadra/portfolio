import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Contact from './pages/contact';
import Project from './pages/realisations';
import ProjectDetails from './pages/realisationsDetails';
import Competences from './pages/competences';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path= "/" element={<App />} />
        <Route path="/pages/competences" element={<Competences />} />
        <Route path="/pages/contact" element={<Contact />}  />
        <Route path="/pages/realisations" element={<Project />} />
        <Route path="/pages/realisations/realisationsDetails/:id" element={<ProjectDetails/>} />
      </ Routes>
    </ Router>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
