this.snake = this.snake || {};

(function () {
    var Velocity = function () {
        var dir = [1, 0];
        var module = 0;
        return {
            initialize: function (aModule, aDir) {
                if (aDir instanceof Array) {
                    for (var i = 0; aDir.length > i; i++) {
                        var dig = parseInt(aDir, 10);
                        if (isNaN(dig)) {
                            throw new Error(snake.ErrorMessages.getWrongArgsMessage());
                        }
                    }
                }
                module = aModule;
                dir = aDir;
            },

            dx: function () {
                return parseInt(module, 10) * dir[0];
            },

            dy: function () {
                return parseInt(module, 10) * dir[1];
            },

            setDir: function (bX, bY) {
                if (isNaN(parseInt(bX, 10)) || isNaN(parseInt(bY, 10))) {
                    throw new Error(snake.ErrorMessages.getWrongArgsMessage());
                }
                dir[0] = bX;
                dir[1] = bY;
            },

            setModule: function (aModule) {
                if (isNaN(aModule)) {
                    throw new Error(snake.ErrorMessages.getWrongArgsMessage());
                }
                module = aModule;
            }
        };
    };
    var Cell = function () {
        var velocity;
        var property;
        return {
            initialize: function (aColor, aH, aW, aX, aY, aModule, aDir) {
                property = new Property(aColor, aH, aW, aX, aY);

                velocity = Velocity.initialize(aModule, aDir);
            },

            getX: function () {
                return x;
            },

            getY: function () {
                return y;
            },
            move: function () {
                x += velocity.dx();
                y += velocity.dy();
            },

            getVelocity: function () {
                return velocity;
            }
        };
    };
    this.snake.Cell = Cell;
    this.snake.Velocity = Velocity;
}());