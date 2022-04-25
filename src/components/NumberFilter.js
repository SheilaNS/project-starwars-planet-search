import React, { useContext, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';
import styles from '../assets/NumberFilter.module.css';

function NumberFilter() {
  const {
    filterByNumericValues,
    setFilterByNumericValues,
    setFilterByNameResult,
    filterByNameResult,
    // results,
    filterState,
    setFilterState,
  } = useContext(PlanetContext);
  const columnFilter = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const comparisonFilter = [
    'maior que',
    'menor que',
    'igual a',
  ];
  let arrayFilter = columnFilter;

  // lógica de filtro do requisito 05 feita com a ajuda do Danillo
  function optionGen(array) {
    if (filterByNumericValues.length !== 0) {
      filterByNumericValues.forEach((elem) => {
        arrayFilter = arrayFilter.filter((column) => elem.column !== column);
      });
      return arrayFilter.map((elem, index) => (
        <option
          value={ elem }
          key={ index }
        >
          {elem}
        </option>
      ));
    }
    // retorno da função
    return array.map((elem, index) => (
      <option
        value={ elem }
        key={ index }
      >
        {elem}
      </option>
    ));
  }

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
    const byNumber = filterByNameResult
      .reduce((acc, elem) => {
        Object.keys(elem)
          .forEach((key) => {
            const comparisonOk = checkComparison(elem, key, filterState);
            if (key === filterState.column && comparisonOk) acc.push(elem);
          });
        return acc;
      }, []);
    setFilterByNameResult(byNumber);
    setFilterState({
      column: arrayFilter[0],
      comparison: comparisonFilter[0],
      value: 0,
    });
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
            { optionGen(columnFilter) }
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
              comparisonFilter.map((elem, index) => (
                <option
                  value={ elem }
                  key={ index }
                >
                  {elem}
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
      { filterByNumericValues && (
        <ul className={ styles.filterList }>
          { filterByNumericValues.map((elem) => (
            <li key={ elem.column }>
              { `${elem.column} ${elem.comparison} ${elem.value}` }
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default NumberFilter;
