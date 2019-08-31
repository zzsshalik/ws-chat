import React from 'react';
import PropTypes from 'prop-types';

import styles from './GameBoard.module.scss';

function Row(props) {
  const { row, numColumns } = props;
  const cells = [];

  for (let i = 0; i < numColumns; i += 1) {
    cells.push(
      <div
        className={styles.cellOffBoard}
        id={`row:${row}/col:${i}`}
        row={row}
        col={i}
        key={`${row}${i}`}
      />,
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
    numColumns, numRows, clickHandler, gameMap,
  } = props;

  function createBoard() {
    const rows = [];
    for (let i = 0; i < numRows; i += 1) {
      rows.push(<Row row={i} numColumns={numColumns} key={i} />);
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
  numColumns: PropTypes.number.isRequired,
  numRows: PropTypes.number.isRequired,
  clickHandler: PropTypes.func.isRequired,
  gameMap: PropTypes.arrayOf(PropTypes.array).isRequired,
};

Row.propTypes = {
  numColumns: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
};
