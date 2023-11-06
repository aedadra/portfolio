import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Contact from './pages/contact';
import Project from './pages/realisations';
import ProjectDetails from './pages/realisationsDetails';
import Competences from './pages/competences';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path= "/portfolio/" element={<Home />} />
        <Route path="/portfolio/competences" element={<Competences />} />
        <Route path="/portfolio/contact" element={<Contact />}  />
        <Route path="/portfolio/realisations" element={<Project />} />
        <Route path="/portfolio/realisationsDetails/:id" element={<ProjectDetails/>} />
      </ Routes>
      <Footer />
    </ Router>    
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
