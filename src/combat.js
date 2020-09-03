import { changeDamageState } from "./functionFactory";
import  { newPlayer, newPlayer1, character, constitution, armor, attack } from '../src/character';


// const combatFunctions = () => {
//   // let state = {
//   //   name
//   // }
//   return { ...state, ...armor(state), ...attack(state), ...canAttack(state), ...receiveDamage(state)}
// }

const canAttack = (player) => ({
  assault:(enemy) => {
    return `${player.name} assulted the enemy`
  }
});

const receiveDamage = (player) => ({
  assault:(player) => {
    return `${player.name} received damage`
  }
});

const death = (player) => ({
  //still working oks for the death mechanic 
  life:() => {

    return `${player.name} is dead`
  }
});

// newCombatPlayer1 = CombatFunctions();
const attack = changeDamageState("life") //or armor?
const weakAttack = attack(-2)
const stongAttack = attack(-5)