var stage1State = {

    create: function() {
        this.onGame = true;

        game.add.sprite(0, 0, 'bg');

        var lab = parseInt(Math.random() * 4);
        console.log(lab);
        if (lab == 0) {
            this.maze = [
                [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
                [2, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
                [1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ];
        } else if (lab == 1) {
            this.maze = [
                [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
                [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
                [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
                [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0],
                [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ];
        } else if (lab == 2) {
            this.maze = [
                [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
                [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
                [1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1],
                [1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
                [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ];
        } else if (lab == 3) {
            this.maze = [
                [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
                [2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
                [1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                [1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
                [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0],
                [1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 3],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
            ];
        }


        this.blocks = game.add.group();
        this.blocks.enableBody = true;

        this.coinPositions = [];

        for (var row in this.maze) {
            for (var col in this.maze[row]) {
                var tile = this.maze[row][col];

                var x = col * 50;
                var y = row * 50;

                if (tile === 1) {
                    var block = this.blocks.create(x, y, 'block');
                    block.body.immovable = true;
                } else
                if (tile === 2) {
                    this.player = game.add.sprite(x + 25, y + 25, 'player');
                    this.player.anchor.set(.5);
                    game.physics.arcade.enable(this.player);
                    this.player.animations.add('goDown', [0, 1, 2, 3], 12, true);
                    this.player.animations.add('goUp', [4, 5, 6, 7], 12, true);
                    this.player.animations.add('goLeft', [8, 9, 10, 11], 12, true);
                    this.player.animations.add('goRight', [12, 13, 14, 15], 12, true);
                } else
                if (tile === 3) {
                    var position = {
                        x: x + 25,
                        y: y + 25
                    };
                    this.coinPositions.push(position);
                }
            }
        }


        this.coin = {};
        this.coin.position = this.newPosition();
        this.coin = game.add.sprite(this.coin.position.x, this.coin.position.y, 'coin');
        this.coin.anchor.set(.5);
        this.coin.animations.add('spin', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true).play();
        game.physics.arcade.enable(this.coin);
        //controles
        this.controls = game.input.keyboard.createCursorKeys();

        //Timer
        this.time = 30;
        this.txtTimer = game.add.text(game.world.centerX, 15, 'TEMPO:' + this.getText(this.time), { font: '30px Commig Soon, bold', fill: '#000' });
        this.txtTimer.anchor.set(1, 0);
        this.timer = game.time.events.loop(1000, function() {
            this.time--;
            this.txtTimer.text = 'TEMPO:' + this.getText(this.time);
        }, this);
    },

    update: function() {
        if (this.onGame) {
            game.physics.arcade.collide(this.player, this.blocks);
            game.physics.arcade.overlap(this.player, this.coin, this.getCoin, null, this);
            this.movePlayer();

            if (this.time < 1 || this.coins >= 10) {
                this.gameOver();
            }
        }
    },

    gameOver: function() {
        this.onGame = false;

        game.time.events.remove(this.timer);

        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;
        this.player.animations.stop();
        this.player.frame = 0;

        game.state.start('end');

    },


    getCoin: function() {

        var t = 30 - this.time;
        swal("Você venceu!", "O seu tempo foi de " + t + " segundos", "success");

        game.state.start('stage1');
    },

    getText: function(value) {
        if (value < 10) {
            return '00' + value.toString();
        }
        if (value < 100) {
            return '0' + value.toString();
        }
        return value.toString();
    },

    movePlayer: function() {
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;

        if (this.controls.left.isDown && !this.controls.right.isDown) {
            this.player.body.velocity.x = -100;
            this.player.direction = "left";
        } else
        if (this.controls.right.isDown && !this.controls.left.isDown) {
            this.player.body.velocity.x = 100;
            this.player.direction = "right";
        }

        if (this.controls.up.isDown && !this.controls.down.isDown) {
            this.player.body.velocity.y = -100;
            this.player.direction = "up";
        } else
        if (this.controls.down.isDown && !this.controls.up.isDown) {
            this.player.body.velocity.y = 100;
            this.player.direction = "down";
        }

        switch (this.player.direction) {
            case "left":
                this.player.animations.play('goLeft');
                break;
            case "right":
                this.player.animations.play('goRight');
                break;
            case "up":
                this.player.animations.play('goUp');
                break;
            case "down":
                this.player.animations.play('goDown');
                break;
        }

        if (this.player.body.velocity.x === 0 && this.player.body.velocity.y === 0) {
            this.player.animations.stop();
        }
    },

    newPosition: function() {
        var pos = this.coinPositions[Math.floor(Math.random() * this.coinPositions.length)];

        while (this.coin.position === pos) {
            pos = this.coinPositions[Math.floor(Math.random() * this.coinPositions.length)];
        }

        return pos;
    }
};