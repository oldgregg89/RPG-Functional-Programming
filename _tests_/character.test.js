import * as character from '../src/character';

test('should increment the armor by 2', () => {
  let player = {race:"", name:"",life:0, defense:0, strike:0}
  expect(armor(player)).toMatchObject({race: "", name:"",life:0, defense:2, strike:0});
});

test('should increment the life by 2', () => {
  let player = {race:"", name:"",life:0, defense:0, strike:0}
  expect(constitution(player)).toMatchObject({race:"", name:"", life:2, defense:0,strike:0});
});

test('should increment the strike by 2', () => {
  let player = {race:"", name:"", life:0, defense:0, strike:0}
  expect(attack(player)).toMatchObject({race:"", name:"", life:0, defense:0, strike:2})
});

test('newPlayer is created', () => {
  expect(newPlayer).toMatchObject({race:"", name:"", life:0, defense:2, strike:0})
})


