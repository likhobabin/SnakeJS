this.snake = this.snake || {};

(function () {
    var Rectangle2D = function (aColor, aH, aW, aX, aY) {
        this.initialize(aColor, aH, aW, aX, aY);
    };
    var p = Rectangle2D.prototype;

    p.fields = function () {
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
        p.fields().set(aColor, aH, aW, aX, aY);
    };

    this.snake.Rectangle2D = Rectangle2D;
}());