import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import './fonts/stylesheet.css';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const CardsPage = lazy(() => import('pages/CardsPage/CardsPage'));
const SingleShowPage = lazy(() => import('pages/SingleShowPage/SingleShowPage'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shows" element={<CardsPage />} />
          <Route path="/shows/:id" element={<SingleShowPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
