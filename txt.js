const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState); //const newState = blueFood(currentState);
    currentState = {...newState}; //{soil:5} 
    return newState;
  }
}
//function factory
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

const playerFxns = function(name) {
  let state = {
    name
  }

  return { ...state, ...inneffectiveAttack(state), ...effectiveAttack(state) };
}
const initialValues = {race:"", name:"", life:10, defense:10, strike:0};

const stateControl = storeState();
const player1 = storeState(initialValues);
const player2 = storeState(initialValues);
console.log(player1)

const attackLife = changeState("defense"); //
const inneffectiveAttack = attackLife(-3);
const effectiveAttack = attackLife(-10);


const newPlayerState = player1(inneffectiveAttack);
console.log("add 5 to soil", newPlayerState);
newPlayer1State = {race:"", name:"", life:10, defense:10, strike:0};
const checkPlayer1State = player1();