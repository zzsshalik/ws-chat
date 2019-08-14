import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styles from './Login.module.scss';

class Logout extends Component {
    logout = (e) => {
      e.preventDefault();
      const { closeConnection } = this.props;
      closeConnection();
    }

    render() {
      return (
        <div id="logout">
          <button value="Logout" type="submit" onClick={this.logout}>Logout</button>
        </div>
      );
    }
}
Logout.propTypes = {
  closeConnection: PropTypes.func.isRequired,
};

export default Logout;
