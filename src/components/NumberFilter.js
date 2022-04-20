import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';
import styles from '../assets/NumberFilter.module.css';

function NumberFilter() {
  const {
    filterByNumericValues,
    setFilterByNumericValues,
    setFilterByNameResult,
    results,
    filterState,
    setFilterState,
  } = useContext(PlanetContext);
  const columnFilter = [
    { value: 'population', name: 'population' },
    { value: 'orbital_period', name: 'orbital_period' },
    { value: 'diameter', name: 'diameter' },
    { value: 'rotation_period', name: 'rotation_period' },
    { value: 'surface_water', name: 'surface_water' },
  ];
  const comparisonFilter = [
    { value: 'maior que' },
    { value: 'menor que' },
    { value: 'igual a' },
  ];

  function handleClick() {
    setFilterByNumericValues([...filterByNumericValues, filterState]);
  }

  function checkComparison(elem, key, { comparison, value }) {
    if (comparison === 'maior que') {
      const isHigher = +elem[key] > +value;
      return isHigher;
    }
    if (comparison === 'menor que') {
      const isLower = +elem[key] < +value;
      return isLower;
    }
    if (comparison === 'igual a') {
      const isEqual = +elem[key] === +value;
      return isEqual;
    }
  }

  useEffect(() => {
    const byNumber = results
      .reduce((acc, elem) => {
        Object.keys(elem)
          .forEach((key) => {
            const comparisonOk = checkComparison(elem, key, filterState);
            if (key === filterState.column && comparisonOk) acc.push(elem);
          });
        return acc;
      }, []);
    setFilterByNameResult(byNumber);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByNumericValues]);

  return (
    <>
      <h2 className={ styles.title }>Filtro 2</h2>
      <form className={ styles.container }>
        <label htmlFor="column-filter" className={ styles.label }>
          Coluna:
          <select
            className={ styles.select }
            id="column-filter"
            data-testid="column-filter"
            name="column"
            value={ filterState.column }
            onChange={ (event) => setFilterState({ ...filterState,
              column: event.target.value }) }
          >
            {
              columnFilter.map((elem) => (
                <option
                  value={ elem.value }
                  key={ elem.value }
                >
                  {elem.name}
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="comparison-filter" className={ styles.label }>
          Comparação:
          <select
            className={ styles.select }
            id="comparison-filter"
            data-testid="comparison-filter"
            name="comparison"
            value={ filterState.comparison }
            onChange={ (event) => setFilterState({ ...filterState,
              comparison: event.target.value }) }
          >
            {
              comparisonFilter.map((elem) => (
                <option
                  value={ elem.value }
                  key={ elem.value }
                >
                  {elem.value}
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="value-filter" className={ styles.label }>
          Quantidade:
          <input
            className={ styles.input }
            type="number"
            data-testid="value-filter"
            name="value"
            id="value-filter"
            value={ filterState.value }
            onChange={ (event) => setFilterState({ ...filterState,
              value: event.target.value }) }
          />
        </label>
        <button
          className={ styles.button }
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </form>
    </>
  );
}

export default NumberFilter;
