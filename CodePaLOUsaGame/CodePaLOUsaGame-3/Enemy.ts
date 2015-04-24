class Enemy extends Phaser.Sprite {
    constructor(public game: Phaser.Game, x: number, y: number) {
        super(game, x, y, 'duck'); // the base sprite object allows us to give it a location and use the duck spritesheet

        this.anchor.setTo(0.5, 0.5); // center the sprite 
        this.name = 'tweeters';
        this.animations.add('fly', [3, 4, 5]); // create a animation named fly using positions 3, 4, 5 in the spritemap - positions are 0 based - this array parameter can be null to use all the frames
        this.animations.play('fly', 6, true); // make the sprite play the animation over and over at 6 frames per second. Each position in the spritemap is a frame

        game.add.existing(this); // add it to our game
    }    
} 