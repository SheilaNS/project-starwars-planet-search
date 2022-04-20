import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';
import styles from '../assets/NameFilter.module.css';

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
    <>
      <h2>Filtro 1</h2>
      <form className={ styles.container }>
        <label className={ styles.label } htmlFor="nameFilter">
          Planeta:
          <input
            className={ styles.input }
            data-testid="name-filter"
            id="nameFilter"
            type="text"
            name="filterByName"
            placeholder="Filtrar por Planeta"
            value={ filterByName.name }
            onChange={ (event) => setFilterByName({ name: event.target.value }) }
          />
        </label>
      </form>
    </>
  );
}

export default NameFilter;
