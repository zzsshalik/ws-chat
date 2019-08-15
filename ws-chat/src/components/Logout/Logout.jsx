import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

// import styles from './Login.module.scss';

class Logout extends Component {
    logout = (e) => {
      e.preventDefault();
      const { closeConnection } = this.props;
      closeConnection();
    }

    render() {
      return (
        <Button variant="outlined" value="Logout" type="submit" onClick={this.logout}>Logout</Button>
      );
    }
}
Logout.propTypes = {
  closeConnection: PropTypes.func.isRequired,
};

export default Logout;
