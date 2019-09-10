import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

import styles from './SettingsInput.module.scss';


export default function SettingsInput(props) {
  const {
   setValueForWin, valueForWin, setGameMap, gameMap,
  } = props;
  const numRows = gameMap.length;
  const numColumns =gameMap[0].length;

  function setValue(e) {
    const { id, value } = e.target;

    if (value < 0 || value > 31) return;

    if (id === 'Columns') {
      setGameMap(new Array(numRows).fill(null).map(() => new Array(+value).fill(null)));
    }
    if (id === 'Rows') {
      setGameMap(new Array(+value).fill(null).map(() => new Array(numColumns).fill(null)));
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
  setValueForWin: PropTypes.func.isRequired,
  valueForWin: PropTypes.number.isRequired,
  setGameMap: PropTypes.func.isRequired,
  gameMap: PropTypes.arrayOf(PropTypes.array).isRequired,
};
