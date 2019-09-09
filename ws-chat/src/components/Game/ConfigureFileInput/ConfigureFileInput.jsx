import React from 'react';
import PropTypes from 'prop-types';

// import TextField from '@material-ui/core/TextField';

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
      const newArrayOfCommands = contents.split('\n').map((commandLine)=>{return commandLine.split(' ')})
      drawController(newArrayOfCommands, setGameMap, gameMap);
    }
    reader.readAsText(control.files[0]);
  }

  return (
    <div className={styles.inputFileContainer}>
        <input type="file" id="import-own-format" onChange={getFile} className="hide-input inputfile" accept=".txt" />
    </div>
  );
}

ConfigureFileInput.propTypes = {
  setGameMap: PropTypes.func.isRequired,
  gameMap: PropTypes.arrayOf(PropTypes.array).isRequired,
};
