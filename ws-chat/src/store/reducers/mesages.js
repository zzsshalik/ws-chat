import { ADD_MESSAGES } from '../constants';

const MESSAGES = {
    messages:[]
};

const messages = (state = MESSAGES, {newMessages, type}) => {
  switch (type) {
    case ADD_MESSAGES :
      return {
        ...state, 
        messages:[...newMessages, ...state.messages],
        }
    default:
    return state;
    };
}

export default messages;
