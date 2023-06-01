import React from 'react';
import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './page/Home';
import Discover from './page/Discover';
import Follow from './page/Home/Follow';
import Hot from './page/Home/Hot';
import Recommend from './page/Home/Recommend';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='follow' element={<Follow />} />
        <Route path='hot' element={<Hot />} />
        <Route path='/' element={<Recommend />} />
      </Route>
      <Route path='/discover' element={<Discover />} />
    </Routes>
  );
}

export default AppRoutes;
