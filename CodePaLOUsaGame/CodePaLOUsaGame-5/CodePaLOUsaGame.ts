class CodePaLOUsaGame extends Phaser.Game {
     constructor() {
         super(891, 558, Phaser.AUTO, 'gameContent');

         this.state.add('Preloader', Preloader, false);
         this.state.add('Main', Main, false);

         this.state.start('Preloader');
     }
 }

 window.onload = () => {
     var game = new CodePaLOUsaGame();
 };