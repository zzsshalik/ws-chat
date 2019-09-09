import React, { useState } from 'react';

import GameBoard from './GameBoard/GameBoard';
import SettingsInput from './SettingsInput/SettingsInput';
import ConfigureFileInput from './ConfigureFileInput/ConfigureFileInput';
import InfoPanel from './InfoPanel/InfoPanel';
import stylesForSells from './GameBoard/GameBoard.module.scss';

export default function Game() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [numRows, setNumRows] = useState(3);
  const [numColumns, setNumColumns] = useState(3);
  const [valueForWin, setValueForWin] = useState(3);
  const [gameMap, setGameMap] = useState(new Array(numRows).fill(0).map(() => new Array(numColumns).fill(null)));

  function clickHandler(e) {
    const col = +e.target.getAttribute('col');
    const row = +e.target.getAttribute('row');
    if (e.target.textContent !== 'X' && e.target.textContent !== 'O' && e.target.className === stylesForSells.cellOffBoard) {
      e.target.textContent = currentPlayer;
      e.target.classList.add(currentPlayer === 'X' ? stylesForSells.cellContainO : stylesForSells.cellContainX);
      setGameMap((prevMap) => {
        const newMap = [...prevMap];
        newMap[row][col] = currentPlayer;
        return newMap;
      });
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  }
  return (
    <>
      <ConfigureFileInput
        setNumRows={setNumRows}
        setNumColumns={setNumColumns}      
        setGameMap={setGameMap}
        gameMap={gameMap}
      />
      <SettingsInput
        setNumRows={setNumRows}
        setNumColumns={setNumColumns}
        setValueForWin={setValueForWin}
        numRows={numRows}
        numColumns={numColumns}
        valueForWin={valueForWin}
        setGameMap={setGameMap}
      />
      <InfoPanel currentPlayer={currentPlayer} />
      <GameBoard
        valueForWin={valueForWin}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        clickHandler={clickHandler}
        gameMap={gameMap}
      />
    </>
  );
}
