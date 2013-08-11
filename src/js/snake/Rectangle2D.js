/**
 * @author Ilya Rockitin ilya.rockitin@gmail.com
 */
snake = snake || {};

(function () {
    function Rectangle2D(aColor, aH, aW, aX, aY) {
        this.initialize(aColor, aH, aW, aX, aY);
    };
    var p = Rectangle2D.prototype;

    p.defaultState = function () {
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

    p.state = null;

    p.initialize = function (aColor, aH, aW, aX, aY) {
        this.state = this.defaultState();
        this.state.set(aColor, aH, aW, aX, aY);
    };

    snake.Rectangle2D = Rectangle2D;
}());