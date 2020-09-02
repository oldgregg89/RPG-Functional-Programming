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

  const changeNameState = (prop) => {
    return (value) => {
      return (state) => ({
        ...state, 
        [prop] : value
      })
    }
  }

  const initialValues = {race:"", name:"", life:0, defense:0, strike:0};
  const player = storeState(initialValues)


  const changeName = changeNameState ("name")

  const armor = changeState("defense")(2)
  const character = changeState("race")
  const constitution = changeState("life")(2)
  const attack = changeState("strike")(2)

  const newPlayer = player(armor)
  console.log("adding values of 2", newPlayer)

  const newPlayer = (name) => {
    let player = {
      name
    }
    return { ...player, ...race(player), ...life(player), ...defense(player), ...strike(player)}
  }


  export { newPlayer, character, constitution, armor, attack }
