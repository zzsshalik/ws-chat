import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

import styles from './SettingsInput.module.scss';


export default function SettingsInput(props) {
  const {
    setNumRows, setNumColumns, setValueForWin, numRows, numColumns, valueForWin, setGameMap,
  } = props;

  function setValue(e) {
    const { id, value } = e.target;

    if (value < 0 || value > 31) return;

    if (id === 'Columns') {
      setNumColumns(+value);
      setGameMap(new Array(numRows).fill(0).map(() => new Array(+value).fill(null)));
    }
    if (id === 'Rows') {
      setNumRows(+value);
      setGameMap(new Array(+value).fill(0).map(() => new Array(numColumns).fill(null)));
    }
    if (id === 'ValueForWin') {
      setValueForWin(+value);
    }

  }

  return (
    <div className={styles.inputContainer}>
      <TextField
        id="Columns"
        label="Columns"
        onChange={setValue}
        type="number"
        variant="outlined"
        value={numColumns}
      />
      <TextField
        id="Rows"
        label="Rows"
        onChange={setValue}
        type="number"
        variant="outlined"
        value={numRows}
      />
      <TextField
        id="ValueForWin"
        label="ValueForWin"
        onChange={setValue}
        type="number"
        variant="outlined"
        value={valueForWin}
      />
    </div>
  );
}

SettingsInput.propTypes = {
  setNumRows: PropTypes.func.isRequired,
  setNumColumns: PropTypes.func.isRequired,
  setValueForWin: PropTypes.func.isRequired,
  valueForWin: PropTypes.number.isRequired,
  numRows: PropTypes.number.isRequired,
  numColumns: PropTypes.number.isRequired,
  setGameMap: PropTypes.func.isRequired,
};
