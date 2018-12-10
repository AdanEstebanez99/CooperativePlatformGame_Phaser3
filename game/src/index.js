import 'phaser';
import config from './config';
import game from './Scenes/game';
import Menu from './Scenes/menu';

class Game extends Phaser.Game {
constructor () {
super(config);
// Cargamos las escenas
this.scene.add('Game', game);
this.scene.add('Menu', Menu);
// Nos dirigimos al menú
this.scene.start('Menu');
}
}
// Y empezamos
window.game = new Game();