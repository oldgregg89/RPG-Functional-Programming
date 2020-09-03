import { storeState, changeState} from "./functionFactory"
import {armor, constitution, attack} from '../src/character.js'

const itemsStats = {life: 0, armor:0, strike: 0};
const item = itemsStats

const magicArmor = {life: 2, armor:2, strike: 0};
const bowstaff = {life: 0, armor:0, strike: 2};
const lifeOrb = {life: 3, armor:0, strike: 0};
const carposArmor = {life: 0, armor:4, strike: 0};
const claymore = {life: 0, armor:0, strike: 1};
const lifeStealingNeckless = {life: 2, armor:0, strike:3};

export {item, magicArmor, bowstaff, lifeOrb}

