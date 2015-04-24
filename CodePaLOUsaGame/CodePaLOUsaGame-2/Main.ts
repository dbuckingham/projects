class Main extends Phaser.State {
    preload() {
        
    }

    create() {
        var background = this.add.sprite(this.world.centerX, this.world.centerY, 'bg');
        background.anchor.setTo(0.5, 0.5);

        var themeSong = this.add.audio('themesong', 1, true); // create an audio object
        themeSong.play('', 0, 1, true); // play the audio object from the beginning, volume level 1 and loop it
    }
} 