class Enemy extends Phaser.Sprite {
    constructor(public game: Phaser.Game, x: number, y: number, onClick: () => void) {
        super(game, x, y, 'duck');

        this.anchor.setTo(0.5, 0.5);
        this.name = 'tweeters';
        this.animations.add('fly', [3, 4, 5]);
        this.animations.play('fly', 6, true);
        this.inputEnabled = true;
        this.events.onInputDown.add(() => {
            onClick();
            this.destroy();
        }, this);

        game.add.existing(this); // add it to our game

        game.time.events.loop(2000, () => {
            game.add.tween(this).to({ x: game.world.randomX, y: game.world.randomY }, 1750, Phaser.Easing.Quadratic.InOut, true);
        }, this);
    }
}