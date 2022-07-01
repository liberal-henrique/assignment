import { createStore as reduxCreateStore } from "redux"

const initialState = { counter: 0 }

const counterReducer = (state, action) => {
  
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 }
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 }
    case 'RESET':
      return { ...state, counter: 0 }
    default:
      return state
  }
}

const createStore = () => reduxCreateStore (counterReducer, initialState)

export default createStore
