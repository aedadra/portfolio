import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Project from './pages/realisations';
import ProjectDetails from './pages/realisationsDetails';
import Competences from './pages/competences';
import Footer from './components/Footer';
import Error from './pages/error';


function App () {
  return (

<>
      <Header />
      <Routes>
        <Route path= "portfolio" element={<Home />} />
        <Route path="competences" element={<Competences />} />
        <Route path="realisations" element={<Project />} />
        <Route path="realisations/realisationsDetails/:id" element={<ProjectDetails/>} />
        <Route path="*" element={<Error />} />
      </ Routes>
      <Footer />
      </>
)}
export default App