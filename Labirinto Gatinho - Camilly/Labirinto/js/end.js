var endState = {
    create: function() {
        game.add.sprite(0, 0, 'end');

        var txtPressStart = game.add.text(game.world.centerX, 250, 'Game Over! Pressione enter para recomeçar', { font: '30px Commig Soon', fill: '#fff' });
        txtPressStart.anchor.set(.5);
        txtPressStart.alpha = 0;

        game.time.events.add(3000, function() {
            game.add.tween(txtPressStart).to({ alpha: 1 }, 500).to({ alpha: 0 }, 500).loop().start();

            var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
            enterKey.onDown.addOnce(this.backToMenu, this);
        }, this);
    },

    backToMenu: function() {
        game.state.start('menu');
    }
};