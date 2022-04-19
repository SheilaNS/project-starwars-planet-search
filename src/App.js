import React from 'react';
import './App.css';
import Planets from './components/Planets';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <PlanetProvider>
      <Planets />
    </PlanetProvider>
  );
}

export default App;
