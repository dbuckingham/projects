class Main extends Phaser.State {
    public soundManager: SoundManager;  // reference our sound manager

    preload() {
       // instantiate our SoundManager 
       // we do this during preload because game.add is not available until after the preload is finished
       this.soundManager = new SoundManager(this.game);
    }

    create() {
        var background = this.add.sprite(this.world.centerX, this.world.centerY, 'bg');
        background.anchor.setTo(0.5, 0.5); 

        this.createEnemy();

        this.soundManager.playForever(Sound.ThemeSong); // play the themesong forever
    }

    private createEnemy() {
        var enemy = new Enemy(this.game, Math.random() * 500, Math.random() * 500, () => {
            // randomly choose to play the blast sound or the dog's laugh
            if (Math.random() <= .7) {
                this.soundManager.playOnce(Sound.Blast);
            } else {
                this.soundManager.playOnce(Sound.Laugh);    
            }
            
            this.createEnemy();
        });
    }
}