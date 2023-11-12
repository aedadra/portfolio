import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Project from './pages/realisations';
import ProjectDetails from './pages/realisationsDetails';
import Competences from './pages/competences';
import Footer from './components/Footer';
import Error from './pages/error';
import {AnimatePresence} from "framer-motion";
import { useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();

  return (

    <>
      <Header />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="competences" element={<Competences />} />
          <Route path="realisations" element={<Project />} />
          <Route path="realisations/realisationsDetails/:id" element={<ProjectDetails />} />
          <Route path="*" element={<Error />} />
        </ Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}
export default App