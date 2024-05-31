import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { LandingPage } from './landing-page/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
          <Route path="test" element={<div>test</div>} />
          <Route path="*" element={<div>no page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
