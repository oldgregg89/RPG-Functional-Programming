const storeState = (item) => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const itemsStats = {life: 0, armor:0, strike}
const item = changeState("")
const armorSpecific = changeState(armor)(2)
const attackSpecific = changeState(strike)(1)
const lifeSpecific = changeState(life)(3)

const magicArmor = armorSpecific
const bowstaff = attackSpecific
const 

