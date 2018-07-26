$(document).ready(function() {
var character;
var gamestate;
//reset
function startgame() {
    character = resetCharacter()
    gamestate = resetgamestate()
    renderCharacters()
}
function resetCharacters () {
    // resets the character stats to originals.
    return {
        'lukeSkywalker': {
        name: 'Luke Skywalker',
        health: 120,
        attack: 8,
        imageUrl: "assets/images/skywalker.jfif",
        enemyAttackBack: 15       
        },
        'hanSolo' : {
            name: 'Han Solo',
            health: 130,
            attack: 10,
            imageUrl: "assets/images/solo.jfif",
            enemyAttackBack: 20
        },
        'stormtrooper' : {
            name: 'StormTrooper',
            health: 100,
            attack: 6,
            imageUrl: "assets/images/stormtrooper1.jfif",
            enemyAttackBack: 5
        },
        'vader' : {
            name: 'Darth Vader',
            health: 160,
            attack: 12,
            imageUrl: "assets/images/vader.jfif",
            enemyAttackBack: 30
        },
    }
}
function resetGameState () {
    // resets game state to originals.
    return {
      selectedCharacter: null,
      selectedDefender: null,
      enemiesLeft: 0,
      numAttacks: 0
    }
  }  
var currSelectedCharacter;
var currDefender;
var combatants = [];
var indexofSelChar;
var attackResult;
var turnCounter = 1;
var killCount = 0;

});