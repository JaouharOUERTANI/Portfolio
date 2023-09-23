import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import './styles/Global.css';
import Body from './Body';
import ProjectDetails from './pages/ProjectDetails'; // Importez le composant ProjectDetails

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Body><Home /></Body>} />
          <Route path="/projets" element={<Body><Projects /></Body>} />
          <Route path="/certifications" element={<Body><Certifications /></Body>} />
          <Route path="/contact" element={<Body><Contact /></Body>} />
          <Route path="/projets/:id" element={<Body><ProjectDetails /></Body>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
