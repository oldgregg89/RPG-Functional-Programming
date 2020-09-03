import { changeDamageState } from "./functionFactory";
import  { newPlayer, character, constitution, armor, attack } from '../src/character';

const canAttack = (player) => ({
  assault:(enemy) => {
    return `${player.name} assulted the enemy`
  }
});

const attack = changeDamageState("life") //or armor?
const weakAttack = attack(-2)
const stongAttack = attack(-5)

const receiveDamage = (player) => ({
  assault:(player) => {
    return `${player.name} received damage`
  }
});

const death = (player) => ({
  //still working on the kicks for the death mechanic 
  life:() => {

    return `${player.name} is dead`
  }
});