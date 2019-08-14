import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addMessages } from '../../store/actions/actionCreator';

import ConversationBox from './ConversationBox/ConversationBox';
import MessagingBox from './MessagingBox/MessagingBox';
import Notifications from './Notifications/Notifications';
// import styles from './MessagingPanel.module.scss';

class MessagingPanel extends Component {
    state={
      messages:[],
    }

    blured = false

    componentDidMount() {
      Notification.requestPermission().then(() => {
      });

      window.onblur = () => {
        this.blured = true;
      };
      window.onfocus = () => {
        this.blured = false;
      };

      this.props.connection.onmessage = (messages) => {
        const newMessages = JSON.parse(messages.data);
        const { addMessages } = this.props;
        addMessages(newMessages);
        if (this.blured) {
          Notifications(newMessages);
        }
      }
    }

    render() {
      const { messages, sendMessage } = this.props;
      return (
        <>
          <ConversationBox messages={messages.messages} />
          <MessagingBox sendMessage={sendMessage} />
        </>
      );
    }
}

export default connect((state) => ({
  messages: state.messages,
}), { addMessages })(MessagingPanel);

MessagingPanel.propTypes = {
  sendMessage: PropTypes.func.isRequired,
};
