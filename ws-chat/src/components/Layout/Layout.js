import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import styles from './Layout.module.scss'

const Layout = ({ children, connectionStatus }) => {

        return (
                < >
                <AppBar color="primary" position="static">
                    App header {connectionStatus}
                </AppBar>
                    {children}
                </>
        );

}
export default Layout