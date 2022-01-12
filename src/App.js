import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from 'components/Header';
import './fonts/stylesheet.css';

const HomePage = lazy(() => import('pages/HomePage'));
const CardsPage = lazy(() => import('pages/CardsPage'));
const SingleShowPage = lazy(() => import('pages/SingleShowPage/SingleShowPage'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shows" element={<CardsPage />} />
          <Route path="/shows/:id" element={<SingleShowPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
