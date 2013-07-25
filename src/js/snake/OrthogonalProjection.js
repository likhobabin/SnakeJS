this.snake = snake || {};

(function () {
    var OrthogonalProjection = function (aShape) {
        this.initialize(aShape);
    };

    var p = OrthogonalProjection.prototype;

    p.initialize = function (aShape) {
        if (shape == (null || undefined) || !(shape instanceof snake.Shape)) {
            throw new Error(snake.Errors().getWrongVariableType());
        }
        // TODO initialize with use of the aShape
    };

    p.fields = function () {
        var min;
        var max;

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
            }
        };
    };

    this.snake.OrthogonalProjection = OrthogonalProjection;
}());
