import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  FormControl,
  InputLabel,
  Input,
  Button,
} from '@material-ui/core';

import styles from './Login.module.scss';

class Login extends Component {
    login = (e) => {
      e.preventDefault(e.target);
      const { toConnect } = this.props;
      toConnect(e.target.username.value);
    }

    render() {
      return (
        <div className={styles.formContainer}>
          <form onSubmit={this.login}>
            <h1>Enter you nickname</h1>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="nickname">Nickname</InputLabel>
              <Input id="username" type="text" />
            </FormControl>
            <Button type="submit" variant="contained" color="primary" size="medium">
                Start
            </Button>
          </form>
        </div>
      );
    }
}
Login.propTypes = {
  toConnect: PropTypes.func.isRequired,
};

export default Login;
