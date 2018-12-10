import 'phaser';

//  Archivo de configuracion
export default {
    type: Phaser.AUTO,
    width: 1240,
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false
        }
    }
};