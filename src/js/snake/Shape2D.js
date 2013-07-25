this.snake = snake || {};

(function () {
    var Shape = function (aRectangle2D) {
        this.initialize(aRectangle2D);
    };

    var p = Shape.prototype;

    p.fields = function () {
        var vertexes = [];
        return {
            getVertexes: function () {
                return vertexes;
            }
        };
    };

    p.initialize = function (aRectangle2D) {
        if (!(aRectangle2D instanceof snake.Rectangle2D)) {
            throw new Error(snake.Errors().getWrongVariableType());
        }
        this.getVertexes()[0] = new snake.Vector2D(aRectangle2D.fields().getX(),
            aRectangle2D.fields().getY());

        this.getVertexes()[1] = new snake.Vector2D(aRectangle2D.fields().getX(),
            aRectangle2D.fields().getY() + h);

        this.getVertexes()[2] = new snake.Vector2D(aRectangle2D.fields().getX() + w,
            aRectangle2D.fields().getY() + h);

        this.getVertexes()[3] = new snake.Vector2D(aRectangle2D.fields().getX() + w,
            aRectangle2D.fields().getY());
    };

    p.getAxes = function () {
        var axes = [];
        var vertexes = this.fields().getVertexes();
        for (var i = 0; vertexes.length > i; i++) {
            var currVertex = vertexes[i];
            var nextVertex = (i + 1 == vertexes.length) ? vertexes[0] : vertexes[i + 1];
            var substractVector = currVertex.substract(nextVertex);
            axes[i] = substractVector.getNormal();
        }
    };

    this.snake.Shape = Shape;
}());
