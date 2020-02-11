// const only means const primitive type. So data cannot be set to 1, true, null, etc
// But the internal structure can be updated, same is true of Arrays (pushing/popping), Maps, Sets
const dice = {};
dice.roll = function (min, max) {
  // Round min/max just in case
  return Math.floor(Math.random() * (Math.floor(max) - Math.floor(min))) + Math.floor(min);
};
dice.rollSingleDiceMultiple = function (sides, rolls) {
  // This creates an array of rolls length, and each value is equal to slides.
  const rollTimeline = Array(rolls).fill(sides);
  // Setting rollTimeline to an array allows us to use Array's built in methods.
  // Even if they only want one roll, we can still use this method to sum that one value.
  // Array.reduce https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  return rollTimeline.reduce(
    (acc, e) => acc + this.roll(1, e),
    0,
  );
};

// if you ever need to do a specific set of dice at the same time, you could use a class for it.
class Dice {
  constructor(set = []) {
    this.set = set;
  }

  roll(min, max) {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
  }

  // same function as the dice object, but using arrow function shorthand to pass the callback
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  rollDiceSet() {
    return this.set.reduce((acc, e) => acc + this.roll(1, e), 0);
  }
}

module.exports = { diceRoll: dice, Dice };


// const diceSet = new Dice([1, 6, 20, 12])
