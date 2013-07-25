this.snake = this.snake || {};

(function () {
    var Cell = function () {
        var velocity;
        var rect;
        return {
            initialize: function (aColor, aH, aW, aX, aY, aVelocity) {
                rect = new Rectangle2D(aColor, aH, aW, aX, aY);
                // TODO: check type of the velocityVector
                if (!(aVelocity instanceof snake.Vector2D)) {
                    throw new Error(snake.Errors().getWrongVariableType());
                }
                velocity = aVelocity;
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
}());