import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import '../assets/Table.css';

function Table() {
  const { results } = useContext(PlanetContext);
  const keys = results.reduce((acc, elem) => {
    acc = Object.keys(elem);
    return acc;
  }, []);
  // segundo map feito com a ajuda do Imar Mendes e Danillo
  return (
    <table className="planet-table">
      <thead>
        <tr>
          {keys.map((key) => key !== 'residents' && (
            <th key={ key }>{key}</th>))}
        </tr>
      </thead>
      <tbody>
        {results.map((elem) => (
          <tr key={ elem.name }>
            {keys.map((key) => key !== 'residents' && (
              <td key={ elem[key] }>{ elem[key] }</td>))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
