import {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {combineReducers, createStore} from 'redux';

const stores= {cart, login, quantity}

function cart (state={}, {type:action, input}) {
  const id=input?.['id']
  switch(action){
    case 'Add':{
        return {...state,...{[id]:input}}
      }
    case 'Delete':
        return state.splice(input)
    default:
        return state
      }
}

function quantity (state={}, {type:action, input }) {
  const id=input?.id
  switch(action){
    case 'Add':{
        let Return= 1
        if(state[id])  Return+=state[id]
        return {...state,...{[id]:Return}}
      }
    case 'Set':{
          return {...state,...{[id]:input.number}}
        }
    case 'Sub':{
        state[id]=state?.[id]+1
        return state
      }
    default:
        return state
      }
}

function login (state=false, {type:action, input}) {
  switch(action){
    case 'Signin':
        return true
    case 'Signout':
        return false
    default:
        return state
  }
}

const Load = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const Save = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};

const Reducers=combineReducers(stores)
const Store = createStore(Reducers, Load())
Store.subscribe(() => Save(Store.getState()));

function Dispatch() {
  const dispatch = useDispatch()

  const Stores = useSelector((stores)=>stores)
  const Action = useCallback(
  (action, input={}) => dispatch({type:action, input}),
  [dispatch])

  return {...Stores, Action}
}

export {Store, Dispatch}
