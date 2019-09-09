import React from 'react';
import PropTypes from 'prop-types';

import styles from './GameBoard.module.scss';

function Row(props) {
  const { row, gameMapRow } = props;
  const cells = [];
  const numColumns = gameMapRow.length;

  for (let i = 0; i < numColumns; i += 1) {
    cells.push(
      <div
        className={styles.cellOffBoard}
        id={`row:${row}/col:${i}`}
        row={row}
        col={i}
        key={`${row}${i}`}
      >
      {gameMapRow[i]}
      </div>,
    );
  }

  return (
    <div className={styles.rowCellsContainer} id={row}>
      {cells}
    </div>
  );
}

export default function GameBoard(props) {
  const {
    clickHandler, gameMap,
  } = props;

  function createBoard() {
    const numRows = gameMap.length;
    const rows = [];
    for (let i = 0; i < numRows; i += 1) {
      rows.push(<Row row={i} key={i} gameMapRow ={gameMap[i]}/>);
    }
    return rows;
  }

  return (
    <div className={styles.rowsContainer} onClick={clickHandler}>
      {createBoard()}
    </div>
  );
}

GameBoard.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  gameMap: PropTypes.arrayOf(PropTypes.array).isRequired,
};

Row.propTypes = {
  row: PropTypes.number.isRequired,
};
