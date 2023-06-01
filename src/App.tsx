import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Router';
import './App.css';
import Nav from './page/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
