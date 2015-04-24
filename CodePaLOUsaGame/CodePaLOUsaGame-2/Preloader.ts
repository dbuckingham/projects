class Preloader extends Phaser.State {
    // preload and create are exposed by the Phaser.State
    preload() {
        this.load.image('bg', 'images/background.png'); 
        this.load.audio('themesong', ['sounds/themesong.ogg']); // load an audio asset - we can pass in an ogg and mp3 file to the array to fall back to if we want
    }

    create() {
        this.startGame();
    }

    startGame() {
        this.game.state.start('Main', true, false);
    }
} 