class Enemy extends Phaser.Sprite {
    constructor(public game: Phaser.Game, x: number, y: number, onClick: () => void) {
        super(game, x, y, 'duck');

        this.anchor.setTo(0.5, 0.5);
        this.name = 'tweeters';
        this.animations.add('fly', [3, 4, 5]);
        this.animations.play('fly', 6, true);
        this.inputEnabled = true;
        this.events.onInputDown.add(() => {  // enable input detection on the input down event
            onClick(); // callback
            this.destroy();  // destroy our enemy
        }, this);

        game.add.existing(this);

        game.time.events.loop(2000, () => {
            // Every 2 seconds of our game loop, add a tween to our enemy to a random location.  The tween will take 1.75s to complete and start immediately
            // Phaser.Easing.Quadratic.InOut is a movement effect/animation effect that we add to the movement, this can be something like a yoyo effect
            // The easing effect will make it speed up and slow down - the enemy "eases" into the movement
            game.add.tween(this).to({ x: game.world.randomX, y: game.world.randomY }, 1750, Phaser.Easing.Quadratic.InOut, true);
        }, this);
    }
}