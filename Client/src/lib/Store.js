import {combineReducers, createStore} from 'redux';
console.log("STORE IS UP AND RUNNING")
function counter (state=0, action) {
  switch(action.type){
    case 'INCREMENT':
        return state+1
    case 'DECREMENT':
        return state-1
    default:
        return state
  }
}

function login (state=false, action) {
  switch(action.type){
    case 'Signin':
        return true
    case 'Signout':
        return false
    default:
        return state
  }
}
const Store = createStore(combineReducers({
  counter,
  login
}))
export default Store;
