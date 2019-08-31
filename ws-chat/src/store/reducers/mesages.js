import { ADD_MESSAGES, DELETE_MESSAGES } from '../constants';

const MESSAGES = {
  messages: [],
};

const messages = (state = MESSAGES, { newMessages, type }) => {
  switch (type) {
    case ADD_MESSAGES:
      return {
        ...state,
        messages: [...newMessages, ...state.messages],
      };
    case DELETE_MESSAGES:
      return {
        ...state,
        messages: [],
      };
    default:
      return state;
  }
};

export default messages;
