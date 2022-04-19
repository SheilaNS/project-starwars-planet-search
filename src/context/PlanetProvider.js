import React, { useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/planetsAPI';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [results, setResults] = useState([]);

  async function requestPlanets() {
    try {
      const data = await fetchPlanets();
      setResults(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  const contextValue = {
    results,
    requestPlanets,
  };

  return (
    <PlanetContext.Provider
      value={ contextValue }
    >
      {children}
    </PlanetContext.Provider>

  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default PlanetProvider;
