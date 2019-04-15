// this game will only have one state
var GameState = {

  // initiatesome game level settings
  init: function() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

  },

  // load the game assets before the game starts
  preload: function() {
    this.load.image('backyard', '../images/backyard.png');
    this.load.image('apple', '../images/apple.png');
    this.load.image('candy', '../images/candy.png');
    this.load.image('rotate', '../images/rotate.png');
    this.load.image('toy', '../images/rubber_duck.png');
    this.load.image('arrow', '../images/arrow.png');
    this.load.spritesheet('pet', '../images/pet.png', 97, 83, 5, 1, 1);
  },

  // execute after everything is loaded
  create: function() {
    this.background = this.game.add.sprite(0, 0, 'backyard');

    this.pet = this.game.add.sprite(100, 400, 'pet');
    this.pet.anchor.setTo(0.5);

    // custom props
    this.pet.customParams = {health: 100, fun:100};

    this.apple = this.game.add.sprite(72, 570, 'apple');
    this.candy = this.game.add.sprite(144, 570, 'candy');
    this.toy = this.game.add.sprite(216, 570, 'toy');
    this.rotate = this.game.add.sprite(288, 570, 'rotate');
  }
};

// initiate the framework
var game = new Phaser.Game(360, 650, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');
