const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState();

  const changeState = (prop) => {
    return (value) => {
      return (state) => ({
        ...state,
        [prop] : (state[prop] || 0) + value 
      })
    }
  }
  
  const character = changeState("race")
  const constitution = changeState("life")(2)
  const armor = changeState("defense")(2)
  const attack = changeState("strike")(2)

  // const newPlayer = (name) => {
  //   let player = {
  //     name
  //   }
  //   return { ...player, ...race(player), ...life(player), ...defense(player), ...strike(player)}
  // }


  export { character, constitution, armor, attack }
