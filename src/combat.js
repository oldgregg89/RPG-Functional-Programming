const canAttack = (player) => ({
  assault:(enemy) => {
    return `${player.name} assulted the enemy`
  }
});

const attack = changeDamageState("life") //or armor?
const weakAttack = attack(-2)
const stongAttack = attack(-5)

const changeDamageState = (prop) => { 
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

const receiveDamage = (player) => ({
  assault:(player) => {
    return `${player.name} received damage`
  }
});

const Death = (player) => ({
  //still working on the kicks for the death mechanic 
  life:(lifeStatusNegative) => {
    return `${player.name} is dead`
  }
});