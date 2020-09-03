import {item, magicArmor, bowstaff, lifeOrb} from '../src/inventory.js';

test('it should create a test item', () => {
  expect(item).toMatchObject({life: 0, armor:0, strike: 0})
});

test('bowstaff should have an attack of 1', () => {
  let item = {life: 0, armor:0, strike: 0}
  expect(bowstaff).toMatchObject({life: 0, armor:0, strike: 2})
});

test('magicArmor should have 2 life & 2 armor', () => {
  let item = {life: 0, armor:0, strike: 0}
  expect(magicArmor).toMatchObject({life: 2, armor:2, strike:0})
});

test('lifeOrb should have 3 life', () => {
  let item = {life: 0, armor:0, strike: 0}
  expect(lifeOrb).toMatchObject({life: 3, armor:0, strike:0})
});
