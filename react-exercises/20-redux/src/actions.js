import * as types from "./constants/actionTypes";

export const increaseCount = () => {
  return {
    type: types.INCREASE_COUNT
  };
};

export const decreaseCount = () => {
  return {
    type: types.DECREASE_COUNT
  }
};

export const toggle = () => {
  // Complete me
};

export const pickColor = color => {
  // Complete me
};

export const setInput = todoInput => {
  // Complete me
};

export const addTodo = () => {
  return {
    type: types.ADD_TODO_ITEM,
    todoInput: todoInput
  }
};
