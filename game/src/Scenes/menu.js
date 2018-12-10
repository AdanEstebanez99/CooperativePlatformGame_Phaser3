import 'phaser';

export default class Menu extends Phaser.Scene {
  constructor (key) {
    super(key);
  }

  preload() {
    // Carga de imágenes
    this.load.image('fondo', 'assets/Background.png');
    this.load.image('puerta1', 'assets/doorAzul.png');
    this.load.image('puerta2', 'assets/doorRojo.png');
  }

  create() {
    // Visualizarlas
    this.add.tileSprite(0, 0, 1240, 720, 'fondo').setOrigin(0, 0);
    this.add.tileSprite(270, 360, 171, 204,"puerta1");
    this.add.tileSprite(270, 600, 171, 204,"puerta2");

    // Añadir texto
    this.add.text(360, 50, 'Menú Principal', { font: '80px Arial', fill: 'white' });
    this.add.text(470, 140, 'Pulsa la tecla', { font: '50px Arial', fill: 'white' });
    this.add.text(495, 200, '\"1\" para comenzar', { font: '30px Arial', fill: 'white' });
    this.add.text(400, 300, 'Con este jugador utiliza la tecla \"w\" para saltar,', { font: '30px Arial', fill: 'white' });
    this.add.text(400, 340, 'la tecla \"a\" y \"d\" para moverse de izquierda a derecha', { font: '30px Arial', fill: 'white' });
    this.add.text(400, 550, 'Con este jugador utiliza las flechas para mover al jugador', { font: '30px Arial', fill: 'white' });
    this.add.text(400, 650, 'Para ganar recoje todas las estrellas y entonces, lleva a cada jugador a su puerta', { font: '22px Arial', fill: 'white' });

    // Si se pulsa el boton : 1
    this.input.keyboard.once('keyup_ONE', function () {

      // Ir a la escena game
        this.scene.start('Game');

    }, this);

  }
};