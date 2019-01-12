import { createStore } from 'redux';

// Action generators - return action objects

// const add = ({ a, b}, c) => {
//   return a + b + c;
// }
// console.log(add({ a: 1, b: 12 }, 100));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

// SET
const setCount = ({ count }) => ({
  type: 'SET',
  count
});

// RESET
const resetCount = () => ({
  type: 'RESET'
});

// Reducer 
// 1. Reducres are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0 
      };    
    default:
      return state;
  }
}

const store = createStore(countReducer);

// Method allow to watch for changes to the strony
// store.subscribe(() => {
//   console.log(store.getState());
// });

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions - an object that gets sent to the store

// We can have actions as: increment, decrement, reset, eg.

// I'd like to increment the count
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

// unsubscribe(); // this watch the state in store after change which is done above by store.dispatch

store.dispatch(incrementCount());

// store.dispatch({
//   type: 'RESET'
// });

store.dispatch(decrementCount());

store.dispatch(resetCount({}));

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });

store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch({
//   type: 'SET',
//   count: 101
// });

store.dispatch(setCount({ count: 101 }));