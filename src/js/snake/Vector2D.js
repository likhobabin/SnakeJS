this.snake = this.snake || {};

(function () {

    function Vector2D(aX, aY) {
        this.initialize(aX, aY);
    };

    var p = Vector2D.prototype;

    p.defaultState = function () {
        var x;
        var y;
        return {
            getX: function () {
                return x;
            },
            setX: function (aX) {
                if (isNaN(aX, 10)) {
                    throw new Error(snake.errors.getWrongArgsMessage());
                }
                x = aX;
            },

            getY: function () {
                return y;
            },
            setY: function (aY) {
                if (isNaN(aY, 10)) {
                    throw new Error(snake.Errors().getWrongArgsMessage());
                }
                y = aY;
            }
        }
    };

    p.state = null;

    p.initialize = function (aX, aY) {
        if (isNaN(parseInt(aX, 10)) || isNaN(parseInt(aY, 10))) {
            throw new Error(snake.Errors().getWrongArgsMessage());
        }
        this.state = this.defaultState();
        this.state.setX(aX);
        this.state.setY(aY);
    };

    p.getNormal = function () {
        return new Vector2D(this.fields().getX(), (-1) * this.fields().getY());
    };

    p.substract = function (rightVector2D) {
        if (rightVector2D == (null || undefined) || !(rightVector2D instanceof snake.Vector2D)) {
            throw new Error(snake.Errors().getWrongVariableType());
        }
        var rightX = rightVector2D.defaultState().getX();
        var rightY = rightVector2D.defaultState().getY();
        var leftX = this.fields().getX();
        var leftY = this.fields().getY();
        return new Vector2D(leftX - rightX, leftY - rightY);
    };

    p.dot = function (rightVector2D) {
        if (rightVector2D == (null || undefined) || !(rightVector2D instanceof snake.Vector2D)) {
            throw new Error(snake.Errors().getWrongVariableType());
        }
        var rightX = rightVector2D.defaultState().getX();
        var rightY = rightVector2D.defaultState().getY();
        var leftX = this.fields().getX();
        var leftY = this.fields().getY();
        return leftX * rightX + leftY * leftX;
    };

    this.snake.Vector2D = Vector2D;
}());
