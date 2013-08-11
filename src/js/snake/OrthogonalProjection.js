snake = snake || {};

(function () {
    function OrthogonalProjection(aShape) {
        this.initialize(aShape);
    };

    var p = OrthogonalProjection.prototype;

    p.defaultState = function () {
        var min;
        var max;
        var shape;

        return {
            setMin: function (aMin) {
                min = aMin;
            },
            getMin: function () {
                return min;
            },

            setMax: function (aMax) {
                max = aMax;
            },
            getMax: function () {
                return max;
            },

            setShape: function (aShape) {
                if (!snake.utils.isTypeOf(aShape, snake.Shape)) {
                    throw new Error(snake.errors.wrongVariableTypeMsg);
                }
                shape = aShape;
            },
            getShape: function () {
                return shape;
            }
        };
    };

    p.state = null;

    p.initialize = function (aShape) {
        this.state = this.defaultState();
        this.state.setShape(aShape);
    };

    p.evaluate = function (anAxis) {
        if (!snake.utils.isTypeOf(anAxis, Array)) {
            throw new Error(snake.errors.wrongVariableTypeMsg);
        }
        if (anAxis.length != aShape.getVertexes().length) {
            throw new Error(snake.errors.wrongObjectStateMsg);
        }
        // TODO initialize with use of the aShape
        var min = vertexes[0].dot(axes);
        var max = min;
        for (var i = 1; vertexes.length > i; i++) {
            var temp = vertexes[i].dot(axes);
            if (min > temp) {
                min = temp;
            } else if (max < temp){
                max = temp;
            }
        }
        this.state.setMin(min);
        this.state.setMax(max);
    };



    snake.OrthogonalProjection = OrthogonalProjection;
}());
