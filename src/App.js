import React from 'react';
import './App.css';
import Planets from './pages/Planets';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <Planets />
    </PlanetProvider>
  );
}

export default App;
