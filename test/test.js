const assert = require('assert');
const dice = require('../src/diceRoller.js');


// DiceRoll Tests
it('should return true', () => {
  assert.equal(true, true);
});

it('Roll, should return number between 1 and 6', () => {
  const actualRoll = dice.diceRoll.roll(1, 6);

  assert(actualRoll >= 1);
  assert(actualRoll <= 6);
});

it('Roll, should return number between 1 and 20', () => {
  const actualRoll = dice.diceRoll.roll(1, 20);

  assert(actualRoll >= 1);
  assert(actualRoll <= 20);
});

it('Roll, should return number between 5 and 20', () => {
  const actualRoll = dice.diceRoll.roll(5, 20);

  assert(actualRoll >= 5);
  assert(actualRoll <= 20);
});

it('Roll, should return number 5', () => {
  const actualRoll = dice.diceRoll.roll(5, 5);

  assert(actualRoll === 5);
});

it('Roll, should return number 1', () => {
  const actualRoll = dice.diceRoll.roll(1, 1);

  assert(actualRoll === 1);
});


it('Roll, should return number -1', () => {
  const actualRoll = dice.diceRoll.roll(-1, -1);

  assert(actualRoll === -1);
});

// RollDiceMultiple Tests

it('rollSingleDiceMultiple, should return number 3', () => {
  const actualRoll = dice.diceRoll.rollSingleDiceMultiple(1, 3);
  assert(actualRoll === 3);
});


it('rollSingleDiceMultiple, should return number greater than 3, less than 18', () => {
  const actualRoll = dice.diceRoll.rollSingleDiceMultiple(6, 3);
  assert(actualRoll >= 3);
  assert(actualRoll <= 18);
});

it('Roll DiceSet, shoukd more than 1 less than 21', () => {
  const diceSet = new dice.Dice([20]);

  const actualRoll = diceSet.rollDiceSet();
  assert(actualRoll >= 1);
  assert(actualRoll <= 20);
});

it('Roll DiceSet, shoukd return more than 3, less than 33', () => {
  const diceSet = new dice.Dice([1, 20, 12]);

  const actualRoll = diceSet.rollDiceSet();
  assert(actualRoll >= 3);
  assert(actualRoll <= 33);
});

it('Roll DiceSet, shoukd return more than 5 less than 68', () => {
  const diceSet = new dice.Dice([1, 20, 12, 15, 20]);

  const actualRoll = diceSet.rollDiceSet();
  assert(actualRoll >= 5);
  assert(actualRoll <= 68);
});
