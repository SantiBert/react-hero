import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Route, Routes } from 'react-router-dom';
import MarvelScreen from '../components/marvel/MarvelScreen';
import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashRouter = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/marvel" element={<MarvelScreen />} />
          <Route path="/dc" element={<DcScreen />} />
          <Route path="/hero/:heroId" element={<HeroScreen />} />
          <Route path="/search" element={<SearchScreen />} />
        </Routes>
      </div>
    </>
  );
};
