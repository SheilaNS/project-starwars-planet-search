import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';

function NameFilter() {
  const {
    results,
    filterByName,
    setFilterByName,
    setFilterByNameResult,
  } = useContext(PlanetContext);

  useEffect(() => {
    const byName = results
      .filter((elem) => elem.name.includes(filterByName.name));
    setFilterByNameResult(byName);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByName]);

  return (
    <form>
      <label htmlFor="nameFilter">
        <input
          data-testid="name-filter"
          id="nameFilter"
          type="text"
          name="filterByName"
          placeholder="Filtrar por nome"
          value={ filterByName.name }
          onChange={ (event) => setFilterByName({ name: event.target.value }) }
        />
      </label>
    </form>
  );
}

export default NameFilter;
