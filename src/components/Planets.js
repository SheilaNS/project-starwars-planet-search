import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';
import Table from './Table';

function Planets() {
  const { requestPlanets } = useContext(PlanetContext);

  useEffect(() => {
    requestPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <p>Planetas aqui!</p>
      <Table />
    </>
  );
}

export default Planets;
