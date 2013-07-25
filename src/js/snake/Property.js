this.snake = this.snake || {};

(function () {
    var Property = function (aColor, aH, aW, aX, aY) {
        this.initialize(aColor, aH, aW, aX, aY);
    };
    var p = Property.prototype;

    p.states = function () {
        var color;
        var h;
        var w;
        var x;
        var y;
        return {
            getColor: function () {
                return color;
            },
            getHeight: function () {
                return height;
            },
            getWidth: function () {
                return width;
            },
            getX: function () {
                return x;
            },
            getY: function () {
                return y;
            },
            set: function (aColor, aH, aW, aX, aY) {
                color = aColor;
                h = aH;
                w = aW;
                x = aX;
                y = aY;
            }
        }
    };

    p.initialize = function (aColor, aH, aW, aX, aY) {
        p.states.set(aColor, aH, aW, aX, aY);
    };

    p.getStates = function () {
        return p.states;
    };

    this.snake.Property = Property;
}());