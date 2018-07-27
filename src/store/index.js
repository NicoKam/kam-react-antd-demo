import { createStore } from 'redux';

const defaultState = 0;
const reducer = (state = defaultState, action) => {
  console.log(state)
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    default: 
      return state;
  }
};
const store = createStore(reducer);

export default store;