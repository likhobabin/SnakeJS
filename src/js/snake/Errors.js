this.snake = this.snake || {};

(function () {
    var ErrorMessages = function () {
        var wrongArguments = "Error: wrong arguments";
        return {
            getWrongArgsMessage: function () {
                return wrongArguments;
            }
        }
    };
    this.snake.ErrorMessages = ErrorMessages;
}());

