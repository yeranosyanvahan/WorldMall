function counterReducer (state=0, action) {
  switch(action.type){
    case 'INCREMENT':
        return state+1
    case 'DECREMENT':
        return state-1
  }
}

function loggedReducer (state=false, action) {
  switch(action.type){
    case 'Signin':
        return true  }
}

export default {loggedReducer counterReducer};
