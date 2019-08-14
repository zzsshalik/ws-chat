import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessagingBox extends Component {
    enterKeyCode = 13;

    typingHandler = (e) => {
      const { sendMessage } = this.props;
      if (e.keyCode === this.enterKeyCode) {
        e.preventDefault();
        sendMessage(e.target.value);
        e.target.value = '';
      }
    }

    render() {
      return (
        <>
          <textarea onKeyDown={this.typingHandler} />
        </>
      );
    }
}
export default MessagingBox;

MessagingBox.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};
