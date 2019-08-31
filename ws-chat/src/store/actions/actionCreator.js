import { ADD_MESSAGES, DELETE_MESSAGES } from '../constants';

export const addMessages = (objectOfArrayMessages) => ({
  type: ADD_MESSAGES,
  newMessages: objectOfArrayMessages,
});

export const deleteMessages = () => ({
  type: DELETE_MESSAGES,
});
