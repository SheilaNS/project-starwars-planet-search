import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import styles from '../assets/Table.module.css';

function Table() {
  const { results, filterByNameResult } = useContext(PlanetContext);
  const tHeader = ['Planeta', 'Rotação', 'Órbita', 'Diâmetro', 'Clima',
    'Gravidade', 'Terreno', 'Água', 'População', 'Filmes', 'Criado', 'Editado', 'URL'];
  const keys = results.reduce((acc, elem) => {
    acc = Object.keys(elem);
    return acc;
  }, []);
  // segundo map feito com a ajuda do Imar Mendes e Danillo
  return (
    <table className={ styles.Table__container }>
      <thead className="Table__header">
        <tr>
          {tHeader.map((key) => key !== 'residents' && (
            <th key={ key }>{key}</th>))}
        </tr>
      </thead>
      <tbody>
        {filterByNameResult.map((elem) => (
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
