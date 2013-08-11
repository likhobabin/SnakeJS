/**
 * @author Ilya Rockitin ilya.rockitin@gmail.com
 */
snake = snake || {};

(function () {
    function Cell() {
        var velocity;
        var rect;
        return {
            initialize: function (aColor, aH, aW, aX, aY, aVelocity) {
                rect = new Rectangle2D(aColor, aH, aW, aX, aY);
                // TODO: check type of the velocityVector
                if (!(snake.utils.isTypeOf(aVelocity, snake.Vector2D))) {
                    throw new Error(snake.errors.wrongVariableTypeMsg);
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
            },

	        getRectaingle: function() {
		        return rect;
	        }
        };
    };
    snake.Cell = Cell;
}());