import React from 'react';
import PropTypes from 'prop-types';
import styles from './InfoPanel.module.scss';

export default function InfoPanel(props) {
  const { currentPlayer } = props;
  return (
    <div className={styles.infoPanelContainer}>
      Next player:
      {' '}
      {currentPlayer}
    </div>
  );
}

InfoPanel.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
};
