import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';
import Table from '../components/Table';
import NameFilter from '../components/NameFilter';

function Planets() {
  const { requestPlanets } = useContext(PlanetContext);

  useEffect(() => {
    requestPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NameFilter />
      <Table />
    </>
  );
}

export default Planets;
