import 'phaser';

export default class game extends Phaser.Scene {
    constructor (key) {
        super(key);
        this.player;
        this.player2;
        this.stars;
        this.bombs;
        this.platforms;
        this.trap;
        this.doorRojo;
        this.doorAzul;
        this.cursors;
        this.cursors2;
        this.score = 0;
        this.gameOver = false;
        this.scoreText;
        this.message;
        this.redWin = 0;
        this.blueWin = 0;
    }

preload() {

    //IMAGENES
    this.load.image('sky', 'assets/Background.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('wall', 'assets/wall.png');
    this.load.image('platform1', 'assets/bloque.png');
    this.load.image('trap', 'assets/trap.png');
    this.load.image('doorRojo', 'assets/doorRojo.png');
    this.load.image('doorAzul', 'assets/doorAzul.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 'assets/red_dude.png', { frameWidth: 32, frameHeight: 48 });
    this.load.spritesheet('dude2', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });

    //AUDIO
    this.load.audio("musica",["./assets/musicaFondo.ogg"]);
    this.load.audio("gameOverSound",["./assets/gameOver.mp3"]);
    this.load.audio("getCoin",["./assets/getCoin.mp3"]);

}

create() {
    //  Un fondo simple para nuestro juego
    this.add.image(400, 300, 'sky');


    //  Grupo del suelo con el que colisiona el jugador
    this.platforms = this.physics.add.staticGroup();

    //  Grupo de trampas con las que muere el jugador
    this.trap = this.physics.add.staticGroup();

    //  Grupo de la puerta del jugador rojo
    this.doorRojo = this.physics.add.staticGroup();

    //  Grupo de la puerta del jugador azul
    this.doorAzul = this.physics.add.staticGroup();

    //  Creamos el suelo
    this.platforms.create(100, 730, 'ground').setScale(0.5).refreshBody();
    this.platforms.create(277, 730, 'ground').setScale(0.5).refreshBody();
    this.platforms.create(485, 730, 'ground').setScale(0.5).refreshBody();
    this.platforms.create(690, 730, 'ground').setScale(0.5).refreshBody();
    this.platforms.create(870, 730, 'ground').setScale(0.5).refreshBody();
    this.platforms.create(1070, 730, 'ground').setScale(0.5).refreshBody();
    this.platforms.create(1190, 730, 'ground').setScale(0.5).refreshBody();


    //  Se crean las paredes divisorias
    this.platforms.create(587, 200, 'wall').setScale(0.4).refreshBody();
    this.platforms.create(587, 570, 'wall').setScale(0.4).refreshBody();
    this.platforms.create(1100, 300, 'wall').setScale(0.4).refreshBody();


    //  Se crean algunas plataformas voladoras pequeñas
    this.platforms.create(290, 435, 'platform1').setScale(2.2).refreshBody();
    this.platforms.create(395, 460, 'platform1').setScale(2.2).refreshBody();
    this.platforms.create(502, 520, 'platform1').setScale(2.2).refreshBody();
    this.platforms.create(820, 625, 'platform1').setScale(2.2).refreshBody();
    this.platforms.create(690, 675, 'platform1').setScale(2.2).refreshBody();
    this.platforms.create(840, 490, 'platform1').setScale(2.2).refreshBody();
    this.platforms.create(1000, 480, 'platform1').setScale(2.2).refreshBody();
    this.platforms.create(20, 270, 'platform1').setScale(2.2).refreshBody();
    this.platforms.create(60, 330, 'platform1').setScale(2.2).refreshBody();
    this.platforms.create(255, 165, 'platform1').setScale(2.2).refreshBody();
    this.platforms.create(544, 185, 'platform1').setScale(2.0).refreshBody();
    this.platforms.create(1220, 465, 'platform1').setScale(2.0).refreshBody();
    this.platforms.create(1145, 410, 'platform1').setScale(2.0).refreshBody();
    this.platforms.create(1220, 350, 'platform1').setScale(2.0).refreshBody();
    this.platforms.create(1145, 290, 'platform1').setScale(2.0).refreshBody();
    this.platforms.create(1220, 225, 'platform1').setScale(2.0).refreshBody();
    this.platforms.create(955, 190, 'platform1').setScale(2.0).refreshBody();
    this.platforms.create(1045, 250, 'platform1').setScale(2.0).refreshBody();
    this.platforms.create(955, 300, 'platform1').setScale(2.0).refreshBody();
    this.platforms.create(145, 635, 'platform1').setScale(2.0).refreshBody();
    this.platforms.create(260, 590, 'platform1').setScale(2.0).refreshBody();


    //  Se crean algunas plataformas voladoras grandes
    this.platforms.create(708, 465, 'ground').setScale(0.3).refreshBody();
    this.platforms.create(90, 400, 'ground').setScale(0.3).refreshBody();
    this.platforms.create(750, 220, 'ground').setScale(0.3).refreshBody();
    this.platforms.create(1000, 600, 'ground').setScale(0.3).refreshBody();
    this.platforms.create(1150, 540, 'ground').setScale(0.25).refreshBody();
    this.platforms.create(155, 215, 'ground').setScale(0.25).refreshBody();
    this.platforms.create(400, 135, 'ground').setScale(0.25).refreshBody();
    this.platforms.create(482, 261, 'ground').setScale(0.25).refreshBody();
    this.platforms.create(800, 350, 'ground').setScale(0.25).refreshBody();
    this.platforms.create(400, 580, 'ground').setScale(0.25).refreshBody();


    //  Se colocan algunas trampas
    this.trap.create(345, 558, 'trap').setScale(0.15).refreshBody();
    this.trap.create(530, 690, 'trap').setScale(0.19).refreshBody();
    this.trap.create(706, 690, 'trap').setScale(0.19).refreshBody();
    this.trap.create(645, 690, 'trap').setScale(0.19).refreshBody();
    this.trap.create(300, 690, 'trap').setScale(0.19).refreshBody();
    this.trap.create(200, 690, 'trap').setScale(0.19).refreshBody();
    this.trap.create(100, 375, 'trap').setScale(0.15).refreshBody();
    this.trap.create(55, 375, 'trap').setScale(0.15).refreshBody();
    this.trap.create(10, 375, 'trap').setScale(0.15).refreshBody();
    this.trap.create(680, 195, 'trap').setScale(0.15).refreshBody();
    this.trap.create(395, 115, 'trap').setScale(0.15).refreshBody();

    //  Se coloca la puerta del jugador rojo
    this.doorRojo.create(753, 300, 'doorRojo').setScale(0.4).refreshBody();

    //  Se coloca la puerta del jugador azul
    this.doorAzul.create(435, 210, 'doorAzul').setScale(0.4).refreshBody();

    //  Se establece la musica de fondo

        this.music = this.sound.add('musica');

        this.loadButton = this.add.text(1100, 20, ' Play Music', { fill: '#ffffff' })
        .setInteractive()
        .on('pointerdown', () => this.music.play());

        this.loadButton = this.add.text(1100, 50, ' Stop Music', { fill: '#ffffff' })
        .setInteractive()
        .on('pointerdown', () => this.music.stop());

    // El jugador 1 y su configuracion
    this.player = this.physics.add.sprite(100, 600, 'dude');

    // El jugador 2 y su configuracion
    this.player2 = this.physics.add.sprite(1150, 600, 'dude2');

    //  Propiedades y fisicas del jugador 1
    this.player.setBounce(0.0);
    this.player.setCollideWorldBounds(true);

    //  Propiedades y fisicas del jugador 2
    this.player2.setBounce(0.0);
    this.player2.setCollideWorldBounds(true);

    //  La animacion del jugador andando de izquierda a derecha

    //movimiento hacia la izquierda
    //jugador 1
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    //jugador 2

    this.anims.create({
        key: 'a',
        frames: this.anims.generateFrameNumbers('dude2', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });


    //movimiento hacia arriba
    //jugador1
    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    //jugador2
    this.anims.create({
        key: 'face',
        frames: [ { key: 'dude2', frame: 4 } ],
        frameRate: 20
    });


    //movimiento hacia la derecha
    //jugador 1
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    //jugador 2
    this.anims.create({
        key: 'd',
        frames: this.anims.generateFrameNumbers('dude2', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });



    //  Eventos de inputs
    this.cursors = this.input.keyboard.createCursorKeys();

    this.cursors2 = this.input.keyboard.addKeys({
        up2:Phaser.Input.Keyboard.KeyCodes.W,
        down2:Phaser.Input.Keyboard.KeyCodes.S,
        left2:Phaser.Input.Keyboard.KeyCodes.A,
        right2:Phaser.Input.Keyboard.KeyCodes.D
    });

    //  Creando 18 estrellas para recogerlas
    this.stars = this.physics.add.group({
        key: 'star',
        repeat: 17,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    this.stars.children.iterate(function (child) {

        //  darle a cada estrella un rebote aleatorio
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });

    this.bombs = this.physics.add.group();

    //  Mostrar la puntuacion
    this.scoreText = this.add.text(16, 16, 'Stars Collected: 0 of 18', { fontSize: '32px', fill: '#ffffff' });

    //  Colision de los jugadores, las estrellas y las bombas con las plataformas.
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.player2, this.platforms);
    this.physics.add.collider(this.stars, this.platforms);
    this.physics.add.collider(this.bombs, this.platforms);

    //  Comprobar si los jugadores recogen alguna estrella lo que llamara a la funcion "collectStar"
    this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);
    this.physics.add.overlap(this.player2, this.stars, this.collectStar, null, this);

    // Comprobar si el jugador golpea a alguna bomba lo que llamara a la funcion "hitBomb"
    this.physics.add.collider(this.player, this.bombs, this.hitBomb, null, this);
    this.physics.add.collider(this.player2, this.bombs, this.hitBomb, null, this);


    // Comprobar si el jugador cae sobre alguna trampa lo que llamara a la funcion "overTrap"
    this.physics.add.collider(this.player, this.trap, this.overTrap, null, this);
    this.physics.add.collider(this.player2, this.trap, this.overTrap, null, this);


    // Comprobar si el jugador esta en la puerta para pasarse el juego y llama a sus respectivas funciones"
    this.physics.add.collider(this.player, this.doorRojo, this.redDoorAction, null, this);
    this.physics.add.collider(this.player2, this.doorAzul, this.blueDoorAction, null, this);

}

update ()
{
    if (this.gameOver)
    {
        return;
    }


    //comprobar si las teclas estan accionadas para el jugador1
    if (this.cursors.left.isDown)
    {
        this.player.setVelocityX(-160);

        this.player.anims.play('left', true);
    }
    else if (this.cursors.right.isDown)
    {
        this.player.setVelocityX(160);

        this.player.anims.play('right', true);
    }
    else
    {
        this.player.setVelocityX(0);

        this.player.anims.play('turn');
    }


    //comprobar si las teclas del jugador2 estan accionadas
    if (this.cursors2.left2.isDown)
    {
        this.player2.setVelocityX(-160);

        this.player2.anims.play('a', true);
    }
    else if (this.cursors2.right2.isDown)
    {
        this.player2.setVelocityX(160);

        this.player2.anims.play('d', true);
    }
    else
    {
        this.player2.setVelocityX(0);

        this.player2.anims.play('face');
    }

    // le damos gravedad al jugador1 si salta
    if (this.cursors.up.isDown && this.player.body.touching.down)
    {
        this.player.setVelocityY(-330);
    }

    // le damos gravedad al jugador2 si salta
    if (this.cursors2.up2.isDown && this.player2.body.touching.down)
    {
        this.player2.setVelocityY(-330);
    }
    
}

collectStar (player, star)
{
    star.disableBody(true, true);

    //  Añadimos y actualizamos la puntuacion
    this.score += 1;
    this.sound.play("getCoin");
    this.scoreText.setText('Stars Collected: ' + this.score + ' of 18');

    //  Si se recogen todas las estrellas generamos 2 bombas (una por cada jugador)
    if (this.stars.countActive(true) === 0)
    {

        //bomba 1
        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = this.bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb.allowGravity = false;


        //bomba 2
        var x2 = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb2 = this.bombs.create(900, 16, 'bomb');
        bomb2.setBounce(1);
        bomb2.setCollideWorldBounds(true);
        bomb2.setVelocity(Phaser.Math.Between(-200, 200), 20);
        bomb2.allowGravity = false;

    }
}

// Funcion que detecta la colision con las bombas y mata a los jugadores
hitBomb (player, bomb)
{
    this.physics.pause();

    this.player.setTint(0xff0000);

    this.player2.setTint(0xff0000);

    this.player.anims.play('turn');

    this.player2.anims.play('turn');

    this.gameOver = true;

    this.cameras.main.shake(500);

    this.message = this.add.text(450, 350, 'GAME OVER', { fontSize: '48px', fill: '#ffffff' });
    this.message.fontWeight = 'bold';
    this.message.font = 'Arial Black';
    this.sound.play("gameOverSound");
}

//  Funcion que detecta la colision con las trampas y mata a los jugadores
overTrap (player, trap)
{
    this.physics.pause();

    this.player.setTint(0xff0000);

    this.player2.setTint(0xff0000);

    this.player.anims.play('turn');

    this.player2.anims.play('turn');

    this.gameOver = true;

    this.cameras.main.shake(500);

    this.message = this.add.text(450, 350, 'GAME OVER', { fontSize: '48px', fill: '#ffffff' });
    this.message.fontWeight = 'bold';
    this.message.font = 'Arial Black';
    this.sound.play("gameOverSound");
}

//  Funcion para comprobar si el jugador rojo ha tocado la puerta para pasar de nivel
redDoorAction (player, doorRojo)
{
    //this.physics.pause();

    if (this.stars.countActive(true) === 0)
    {


    this.redWin = 1;

    if (this.redWin == 1) {
        this.player.setTint(0x0ff00);
        this.player.anims.play('turn');
        if (this.blueWin == 1) {
            this.message = this.add.text(450, 350, 'YOU WIN!', { fontSize: '48px', fill: '#ffffff' });
            this.message.font = 'Arial Black';
            this.message.fontWeight = 'bold';

            this.physics.pause();
        }
    }


    }

    //gameOver = true;
}

//  Funcion para comprobar si el jugador azul ha tocado la puerta para pasar de nivel
blueDoorAction (player, doorAzul)
{
    //this.physics.pause();

    if (this.stars.countActive(true) === 0)
    {

        this.blueWin = 1;

        if (this.blueWin == 1) {
            this.player2.setTint(0x0ff00);
            this.player.anims.play('turn');
            if (this.redWin == 1) {
                this.message = this.add.text(450, 350, 'YOU WIN!', { fontSize: '48px', fill: '#ffffff' });
                this.message.font = 'Arial Black';
                this.message.fontWeight = 'bold';

                this.physics.pause();
            }
        }

    //gameOver = true;
    }
}
};