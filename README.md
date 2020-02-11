# DND Dice Roller

## Description

This app allows for the loading of character profiles with attached dice rolls to make playing DND really easy.

## CLI Directly


Create a profile json file. Something like:

awesome.json

That should have the structure:

```json
{
    "type of roll" : 
        {
            "dice" : sided dice to roll,
            "modifier" : modifier to dice roll to apply
        }
```
A full example of this is provided here:
```json
    "dexterity" : 
        {
            "dice" : 20,
            "modifier" : 5
        },
    "stealth" : 
        {
            "dice" : 20,
            "modifier" : 9
        }
}
```

```npm install
npm run start
```
