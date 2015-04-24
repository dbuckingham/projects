class Preloader extends Phaser.State {
    preload() {
        this.load.image('bg', 'images/background.png'); // load assests
        this.load.audio('themesong', ['sounds/themesong.ogg']); 
        this.load.audio('blast', ['sounds/blast.ogg']);
        this.load.audio('laugh', ['sounds/laugh.ogg']);
        this.load.spritesheet('duck', 'images/duck-hunt-ducks-34x34.png', 34, 34, 9);
    }

    create() {
        this.startGame();
    }

    startGame() {
        this.game.state.start('Main', true, false);
    }
} 