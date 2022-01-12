import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import CardsPage from 'pages/CardsPage';
import Header from 'components/Header';
import SingleShowPage from 'pages/SingleShowPage';
import './fonts/stylesheet.css';

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
