import React, {useCallback} from 'react';
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


const Reducers=combineReducers(stores)
const Store = createStore(Reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
function Dispatch() {
  const dispatch = useDispatch()

  const Stores = useSelector((stores)=>stores)
  const Action = useCallback(
  (action, input={}) => dispatch({type:action, input}),
  [dispatch])

  return {...Stores, Action}
}

export {Store, Dispatch}
