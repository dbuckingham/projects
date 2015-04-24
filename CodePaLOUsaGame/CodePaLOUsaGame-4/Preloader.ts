class Preloader extends Phaser.State {
    preload() {
        this.load.image('bg', 'images/background.png');
        this.load.audio('themesong', ['sounds/themesong.ogg']); 
        this.load.spritesheet('duck', 'images/duck-hunt-ducks-34x34.png', 34, 34, 9);
    }

    create() {
        this.startGame();
    }

    startGame() {
        this.game.state.start('Main', true, false);
    }
} 