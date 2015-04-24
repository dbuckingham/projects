class Preloader extends Phaser.State {
    preload() {
        this.load.image('bg', 'images/background.png');
        this.load.audio('themesong', ['sounds/themesong.ogg']); 
        this.load.spritesheet('duck', 'images/duck-hunt-ducks-34x34.png', 34, 34, 9); // preload a spritemap, each sprite is 34x34 and there are 9 images in the map
    }

    create() {
        this.startGame();
    }

    startGame() {
        this.game.state.start('Main', true, false);
    }
} 