import { ADD_MESSAGES } from '../constants'

export const addMessages = (objectOfArrayMessages) => ({
  type: ADD_MESSAGES,
  newMessages: objectOfArrayMessages,
});