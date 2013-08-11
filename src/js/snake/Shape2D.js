snake = snake || {};

(function () {
    function Shape(aRectangle2D) {
        this.initialize(aRectangle2D);
    };

    var p = Shape.prototype;

    p.defaultState = function () {
        var vertexes = [];
        return {
            getVertexes: function () {
                return vertexes;
            },
            setVertexes : function (aVertexes) {
                if ( !snake.utils.isTypeOf(aVertexes, Array)) {
                    throw new Error(snake.errors.wrongVariableTypeMsg);
                }
                vertexes = aVertexes;
            }
        };
    };

    p.state = null;

    p.initialize = function (aRectangle2D) {
        if (!snake.utils.isTypeOf(aRectangle2D, snake.Rectangle2D)) {
            throw new Error(snake.Errors().getWrongVariableType());
        }
        var vertexes = [];
        vertexes[0] = new snake.Vector2D(aRectangle2D.defaultState().getX(),
            aRectangle2D.defaultState().getY());

        vertexes[1] = new snake.Vector2D(aRectangle2D.defaultState().getX(),
            aRectangle2D.defaultState().getY() + h);

        vertexes[2] = new snake.Vector2D(aRectangle2D.defaultState().getX() + w,
            aRectangle2D.defaultState().getY() + h);

        vertexes[3] = new snake.Vector2D(aRectangle2D.defaultState().getX() + w,
            aRectangle2D.defaultState().getY());

        this.state = this.defaultState();
        this.state.setVertexes(vertexes);

        return this;
    };

    snake.Shape = Shape;
}());
