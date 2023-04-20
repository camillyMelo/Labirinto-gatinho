var menuState = {
    create: function() {//criação
        game.add.sprite(0, 0, 'bg2');
        var txtLabirinto = game.add.text(game.world.centerX, 100, 'Labirinto Gatinho', { font: '60px Coming Soon', fill: '#b32d00' });
        txtLabirinto.anchor.set(.5);

        var txtPressStart = game.add.text(game.world.centerX, 400, 'Pressione Enter', { font: '30px Coming Soon', fill: '#ff9f80' });
        txtPressStart.anchor.set(.2);//velocidade

        game.add.tween(txtPressStart).to({ y: 150 }, 1000).start();//manipula a posição no eixo y vai de 400 a 150

        game.time.events.add(1000, function() {

            var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);//utiliza o Phaser para pegar o enter
            enterKey.onDown.addOnce(this.startGame, this);
        }, this);
    },

    startGame: function() {
        game.state.start('stage1');
    }
};