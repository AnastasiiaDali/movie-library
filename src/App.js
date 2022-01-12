import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import CardsPage from 'pages/CardsPage';
import Header from 'components/Header';
import SingleShowPage from 'pages/SingleShowPage/SingleShowPage';
import './fonts/stylesheet.css';

// TODO: make code splitting based on routing
// TODO: use sx, remove all inline styling
// TODO: add proptypes

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shows" element={<CardsPage />} />
        <Route path="/shows/:id" element={<SingleShowPage />} />
      </Routes>
    </>
  );
}

export default App;
