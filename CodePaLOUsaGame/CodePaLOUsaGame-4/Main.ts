class Main extends Phaser.State {
    preload() {

    }

    create() {
        var background = this.add.sprite(this.world.centerX, this.world.centerY, 'bg');
        background.anchor.setTo(0.5, 0.5); 

        var themeSong = this.add.audio('themesong', 1, true);
        themeSong.play('', 0, 1, true);

        this.createEnemy();
    }

    private createEnemy() {
        var enemy = new Enemy(this.game, Math.random() * 500, Math.random() * 500, () => {
            // This is our callback method - create a new enemy after this one is clicked and dies!
            this.createEnemy();
        });
    }
}