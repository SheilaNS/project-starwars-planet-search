import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';
import Table from '../components/Table';
import NameFilter from '../components/NameFilter';

function Planets() {
  const { requestPlanets } = useContext(PlanetContext);

  useEffect(() => {
    requestPlanets();
  }, []);

  return (
    <>
      <NameFilter />
      <Table />
    </>
  );
}

export default Planets;
