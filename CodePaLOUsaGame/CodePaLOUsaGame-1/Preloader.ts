class Preloader extends Phaser.State {
    // preload and create are exposed by the Phaser.State
    preload() {
        this.load.image('bg', 'images/background.png'); // load assests
    }

    create() {
        this.startGame();
    }

    startGame() {
        this.game.state.start('Main', true, false); // load the next state of the game and clear the game world
    }
} 