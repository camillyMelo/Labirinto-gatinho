var game = new Phaser.Game(750, 500, Phaser.CANVAS);//renderiza o jogo

game.global = {
    score: 0,
    highScore: 0
};

game.state.add('load', loadState);//identificação do obj de cada classe
game.state.add('menu', menuState);
game.state.add('stage1', stage1State);
game.state.add('end', endState);

game.state.start('load');//inicia o load