import React, { Component } from 'react';
import moment from 'moment';
import { VariableSizeList as List } from 'react-window';
import PropTypes from 'prop-types';

import styles from './ConversationBox.module.scss';

function Message({ data, index, style }) {
  const reverseIndex = data.length - 1 - index;
  return (
    <div className={index % 2 ? styles.conversationItemOdd : styles.conversationItemEven} style={style}>
      <div className={styles.nicknameContainer}>{data[reverseIndex].from}</div>
      <div className={styles.messageContainer}>{data[reverseIndex].message}</div>
      <div className={styles.dataContainer}>{moment.unix(data[reverseIndex].time / 1000).format('DD MMM h:mm:ss')}</div>
    </div>
  );
}

export default class ConversationBox extends Component {
  listRef = React.createRef()

  componentDidUpdate() {
    const { messages } = this.props;
    this.listRef.current.scrollToItem(messages.length);
  }

  render() {
    const { messages } = this.props;
    const height = 36;
    const lettersOnRow = 80;
    const getItemSize = (index) => {
      const reverseIndex = messages.length - 1 - index;
      return Math.ceil(messages[reverseIndex].message.length / lettersOnRow) * height + height;
    };
    return (
      <List
        height={500}
        itemCount={messages.length}
        itemSize={getItemSize}
        width="75vw"
        className={styles.conversationContainer}
        itemData={messages}
        ref={this.listRef}
      >
        {Message}
      </List>
    );
  }
}

Message.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.string,
  }).isRequired,
};
ConversationBox.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};
