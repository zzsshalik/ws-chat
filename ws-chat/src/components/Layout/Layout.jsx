import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';

import styles from './Layout.module.scss';

const Layout = ({ children, connectionStatus }) => {

  return (
    < >
      <AppBar color="primary" position="static">
          App header
        {connectionStatus}
      </AppBar>
      {children}
    </>
  );
};

Layout.propTypes = {
  connectionStatus: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Layout;
