import {item, magicArmor, bowstaff, lifeOrb, armorSpecific, attackSpecific, lifeSpecific, itemsStats} from '../src/inventory.js';

test('it should create a test item', () => {
  expect(item).toMatchObject({life: 0, armor:0, strike: 0})
});