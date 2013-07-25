this.snake = this.snake || {};

(function () {
    var Errors = function () {
        var wrongArguments = "Error: wrong arguments";
        var wrongVariableType = "Error: var has a wrong type";
        return {
            getWrongArgsMessage: function () {
                return wrongArguments;
            },

            getWrongVariableType: function () {
                return wrongVariableType;
            }
        }
    };
    this.snake.Errors = Errors;
}());

