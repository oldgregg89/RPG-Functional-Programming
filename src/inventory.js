import { storeState, changeState, changeNameState } from "./functionFactory"

const itemsStats = {life: 0, armor:0, strike: 0}
const item = itemsStats
const armorSpecific = changeState(armor)(2)
const attackSpecific = changeState(strike)(1)
const lifeSpecific = changeState(life)(3)

const magicArmor = armorSpecific
const bowstaff = attackSpecific
const lifeOrb = lifeSpecific
const carposArmor = armorSpecific
const claymore = attackSpecific
const lifeStealingNeckless = lifeSpecific

export {item, magicArmor, bowstaff, lifeOrb, armorSpecific, attackSpecific, lifeSpecific, itemsStats}

