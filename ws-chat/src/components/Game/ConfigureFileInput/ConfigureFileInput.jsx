import React from 'react';
import PropTypes from 'prop-types';

import styles from './ConfigureFileInput.module.scss';
import drawController from '../drawingFunctions/drawController';

export default function ConfigureFileInput(props) {
  const {
    setGameMap, gameMap,
  } = props;

  function getFile() {
    const control = document.getElementById('import-own-format');
    const reader = new FileReader();
    reader.onload = (event) => {
      const contents = event.target.result;
      const newArrayOfCommands = contents.split('\n').map((commandLine) => { return commandLine.split(' '); });
      drawController(newArrayOfCommands, setGameMap, gameMap).then((newGameMap) => {
        setGameMap(newGameMap);
      });
    };
    reader.readAsText(control.files[0]);
  }

  return (
    <div className={styles.inputFileContainer}>
      <input type="file" id="import-own-format" onChange={getFile} className="hide-input inputfile" accept=".txt" />
      <label htmlFor="import-own-format" className="import-label"> <span>Import file</span> </label>
    </div>
  );
}

ConfigureFileInput.propTypes = {
  setGameMap: PropTypes.func.isRequired,
  gameMap: PropTypes.arrayOf(PropTypes.array).isRequired,
};
