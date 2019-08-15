import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Logout from '../Logout/Logout';
import StatusBar from '../StatusBar/StatusBar';
import styles from './Layout.module.scss';


const Layout = ({ children, connectionStatus, closeConnection }) => (
  < >
    <AppBar color="primary" position="static" className={styles.layoutContainer}>
      <List component="nav">
        <ListItem component="div">
          <Logout closeConnection={closeConnection} />
          <StatusBar connectionStatus={connectionStatus} />
        </ListItem>
      </List>
    </AppBar>
    {children}
  </>
);

Layout.propTypes = {
  connectionStatus: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  closeConnection: PropTypes.func.isRequired,
};

export default Layout;
