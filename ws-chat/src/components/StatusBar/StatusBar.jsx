import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import styles from './StatusBar.module.scss';

export default function StatusBar({ connectionStatus }) {
  return (
    <div className={styles.statusBar}>
      <Chip
        avatar={<Avatar>{connectionStatus.slice(0, 2)}</Avatar>}
        label={connectionStatus}
        color="primary"
        style={connectionStatus === 'online' ? { background: 'green' } : { background: 'repeating-linear-gradient(45deg, black, transparent 100px)' }}
      />
    </div>
  );
}

StatusBar.propTypes = {
  connectionStatus: PropTypes.string,
};

StatusBar.defaultProps = {
  connectionStatus: '',
};
