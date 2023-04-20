var loadState = {
    preload: function() {//função para pré-carregar as imagens/recursos nas variáveis para usar no código

        game.load.image('bg', 'img/back.png');
        game.load.image('bg2', 'img/gatinhoInicio.jpg');
        game.load.image('venceu', 'img/venceu.jpg');
        game.load.image('block', 'img/arv.png');
        game.load.image('end', 'img/fim.jpg');
        game.load.image('part', 'img/part.png');

        game.load.image('coin', 'img/icone.png');
        game.load.spritesheet('player', 'img/cat.png', 40, 40);

        game.physics.startSystem(Phaser.Physics.ARCADE);//inicia o sistema físico do jogo com o Arcade (jogo 2d, detecta colisões, etc)
    },

    create: function() {
        game.state.start('menu');
    }
};