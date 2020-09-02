const storeState = (player) => {
  let currentState = player;  
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

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

// const newPlayer = (name) => {
//   let player = {
//     name
//   }
//   return { ...player, ...armor(player) ...attack(player)}
// }

  const initialValues = {race:"", name:"", life:10, defense:10, strike:0};

  const player = storeState(initialValues)
  const player2 = storeState(initialValues)
  
  const changeName = changeNameState ("name")

  const armor = changeState("defense")(2)
  const character = changeState("race")("")
  const constitution = changeState("life")(2)
  const attack = changeState("strike")(2)

  const newPlayer = player(armor)
  const newPlayer2 = player2(constitution)

  newPlayer.armor()
  
  console.log("adding values of 2", newPlayer)
  console.log("adding values of 2", newPlayer2)
  
  
  // working on creating a new character but testing is not reading the export properly

  // export { newPlayer, character, constitution, armor, attack }
