/**
 * @author Ilya Rockitin ilya.rockitin@gmail.com
 */
snake = {} || snake;
snake.utils = {} || snake.utils;

(function () {
	function evaluateShapeAxises(aShape) {
		if (!snake.utils.isTypeOf(aShape, snake.Shape)) {
			throw new Error(snake.errors.wrongVariableTypeMsg);
		}
		var axises = [];
		var vertexes = this.state.getVertexes();
		for (var i = 0; vertexes.length > i; i++) {
			var currVertex = vertexes[i];
			var nextVertex = (i + 1 == vertexes.length) ? vertexes[0] : vertexes[i + 1];
			var substractVector = currVertex.substract(nextVertex);
			axises[i] = substractVector.getNormal();
		}
		return axises;
	};

	function shapesOverlap(aFirstShape, aSecShape) {
		if (!isTypeOf(aFirstShape) || !isTypeOf(aSecShape)) {
			throw new Error("snake.utils.isOverlap" + snake.errors.wrongVariableTypeMsg);
		}
		var firstAxises = evaluateShapeAxises(aFirstShape);
		var secAxises = evaluateShapeAxises(aSecShape);
		var aFirstProjection = new snake.OrthogonalProjection(aFirstShape);
		var aSecProjection = new snake.OrthogonalProjection(aSecShape);
		var i;
		for (i = 0; firstAxises.length > i; i++) {
			aFirstProjection.evaluate(firstAxises[i]);
			aSecProjection.evaluate(firstAxises[i]);
			if (!orthProjectionsOverlap(aFirstProjection, aSecProjection)) {
				return false;
			}
		}
		for (i = 0; secAxises.length > i; i++) {
			aFirstProjection.evaluate(secAxises[i]);
			aSecProjection.evaluate(secAxises[i]);
			if (!orthProjectionsOverlap(aFirstProjection, aSecProjection)) {
				return false;
			}
		}
		return true;

	};

	function orthProjectionsOverlap(aFirstProjection, aSecProjection) {
		if (!isTypeOf(aFirstProjection, snake.OrthogonalProjection)
				|| !isTypeOf(aSecProjection, snake.OrthogonalProjection)) {

			throw new Error("snake.utils.orthProjectionOverlap" + snake.errors.wrongVariableTypeMsg);
		}

		var leftSideMax;
		var rightSideMin;

		if (aFirstProjection.state.getMin() > aSecProjection.state.getMin()) {
			leftSideMax = aSecProjection.state.getMax();
			rightSideMin = aFirstProjection.state.getMin();
		} else {
			leftSideMax = aFirstProjection.state.getMax();
			rightSideMin = aSecProjection.state.getMin();
		}
		return leftSideMax < rightSideMin;
	};

	function isTypeOf(checkObject, aConstructor) {
		if (checkObject == (null || undefined) || aConstructor == (null || undefined)) {
			throw new Error(snake.errors.wrongArgumentsMsg);
		}
		return checkObject instanceof aConstructor;
	};

	snake.utils.evaluateAxises = evaluateShapeAxises;
	snake.utils.shapesOverlap = shapesOverlap;
	snake.utils.orthProjectionsOverlap = orthProjectionsOverlap;
	snake.utils.isTypeOf = isTypeOf;
}());