export const storeState = (player) => {
  let currentState = player;  
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value 
    })
  }
}

export const changeNameState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state, 
      [prop] : value
    })
  }
}

export const changeDamageState = (prop) => { 
  //work on what prop2 would be in the sceme of things. defense armor minus attack value 
  return (prop2)=> {
    return (value) => {
      return (state) => ({
        ...state,
        [prop] : (state[prop2] || 0) - value 
      })
    }
  }
}

export const storeItemState = (item) => {
  let currentState = item;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}