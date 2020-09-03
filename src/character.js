import { storeState, changeState, changeNameState } from "./functionFactory"
const newPlayer = (name) => {
  let player = {
    name
  }
  return { ...player, ...armor(player) ...attack(player)}
}

  const initialValues = {race:"", name:"", life:10, defense:0, strike:0};

  const player1 = storeState(initialValues)
  const player2 = storeState(initialValues)
  
  const changeName = changeNameState ("name")

  const armor = changeState("defense")(2)
  const character = changeState("race")("")
  const constitution = changeState("life")(2)
  const attack = changeState("strike")(2)

  const newPlayer = player1(armor)
  const newPlayer2 = player2(constitution)
  
  
  // working on creating a new character but testing is not reading the export properly

  export { newPlayer, character, constitution, armor, attack }
