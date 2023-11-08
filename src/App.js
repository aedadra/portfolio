import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Project from './pages/realisations';
import ProjectDetails from './pages/realisationsDetails';
import Competences from './pages/competences';
import Footer from './components/Footer';



function App () {
  return (

<Router>
      <Header />
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path="/pages/competences" element={<Competences />} />
        <Route path="/pages/realisations" element={<Project />} />
        <Route path="/pages/realisations/realisationsDetails/:id" element={<ProjectDetails/>} />
      </ Routes>
      <Footer />
    </ Router> 
)}
export default App