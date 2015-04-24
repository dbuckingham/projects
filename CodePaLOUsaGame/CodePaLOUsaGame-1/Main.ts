class Main extends Phaser.State {
    // Phaser.State object exposes preload and create events and automatically calls them at the appropriate times in the game loop
    preload() {
        
    }

    create() {
        var background = this.add.sprite(this.world.centerX, this.world.centerY, 'bg');  // create a sprite 
        background.anchor.setTo(0.5, 0.5);  // center the background
    }
} 