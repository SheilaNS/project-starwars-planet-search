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
    <table className={ styles.container }>
      <thead className={ styles.header }>
        <tr className={ styles.header_tr }>
          {tHeader.map((key) => key !== 'residents' && (
            <th clallName={ styles.header_content } key={ key }>{key}</th>))}
        </tr>
      </thead>
      <tbody className={ styles.body }>
        {filterByNameResult.map((elem) => (
          <tr className={ styles.body_tr } key={ elem.name }>
            {keys.map((key) => key !== 'residents' && (
              <td
                className={ styles.body_td }
                key={ elem[key] }
              >
                { elem[key] }
              </td>))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
