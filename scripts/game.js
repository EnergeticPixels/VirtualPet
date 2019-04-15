// this game will only have one state
var GameState = {

  // initiatesome game level settings
  init: function() {

  },

  // load the game assets before the game starts
  preload: function() {

  },

  // execute after everything is loaded
  create: function() {

  }
};

// initiate the framework
var game = new Phaser.Game(360, 650, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');
