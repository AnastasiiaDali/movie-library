import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Header from 'components/Header';
import './fonts/stylesheet.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
