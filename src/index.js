import React from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Home from './pages/home/Home';
import Header from './components/hearder/Header';
import Projets from './pages/projets/Projets';
import Contact from './pages/contact/Contact';
import Competences from './pages/competences/Competences';
import Error from './pages/404/404';
import Footer from './components/footer/Footer';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projets" element={<Projets />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Competences" element={<Competences />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={ <Navigate to="/404" /> } />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
