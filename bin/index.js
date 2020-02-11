const Inquirer = require('inquirer');
const diceRoller = require('../src/diceRoller.js');

// https://blog.risingstack.com/node-js-logging-tutorial/ Need to add some logging via a real logging stack.
const main = async () => {
  const answers = await Inquirer.prompt([
    { name: 'profile', type: 'input', message: 'Enter the Character Profile to Load:' },
  ]);
  // Dynamically get the options for the type of roll depending on what has been inputted into the JSON
  const jsonData = require(`${process.cwd()}/profiles/${answers.profile}.json`);
  const customChoices = Object.keys(jsonData);
  const rollType = await Inquirer.prompt([{
    name: 'roll', type: 'list', choices: customChoices, message: 'What type of roll do you want to make?',
  }]);
  try {
    const { diceToRoll } = jsonData[rollType.roll];
    const { modifier } = jsonData[rollType.roll];
    const { numberOfDice } = jsonData[rollType.roll];
    const result = diceRoller.diceRoll.rollSingleDiceMultiple(diceToRoll, numberOfDice);
    const finalResult = Number(result + modifier);
    console.log(finalResult);
  } catch (e) {
    console.log(e);
  }

//   info('Running `npm outdated` with the shell package...')
//   Shell.exec('npm outdated')
};

(async () => {
  try {
    await main();
  } catch (e) {
    console.log(e);
  }
})();
