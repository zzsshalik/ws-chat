import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import styles from './MessagingBox.module.scss';

class MessagingBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

    typingHandler = (e) => {
      const { sendMessage } = this.props;
      this.message = e.target.value;
      this.setState({...this.state, message: e.target.value });

      if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage(e.target.value);
        e.target.value = '';
      }
    }

    sendMessageHandler = (e) => {
      e.preventDefault();
      const { sendMessage } = this.props;
      const { message } = this.state;
      if (message !== '') {
        sendMessage(message);
        document.getElementById('input-panel').value = '';
        this.setState({...this.state, message: '' });
      }
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit} className={styles.messageForm}>
          <TextField fullWidth label="Message" onKeyDown={this.typingHandler} id="input-panel" />
          <Button type="submit" variant="outlined" size="small" color="primary" onClick={this.sendMessageHandler}>
            Send
          </Button>
        </form>
      );
    }
}
export default MessagingBox;

MessagingBox.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};
