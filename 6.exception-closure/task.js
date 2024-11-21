function parseCount(value) {
	const parsedValue = Number.parseFloat(value);
	if (isNaN(parsedValue)) {
		throw new Error('Невалидное значение');
	}
	return parsedValue;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(sideA, sideB, sideC) {
		if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
		this.sideA = sideA;
		this.sideB = sideB;
		this.sideC = sideC;
	}
	get perimeter() {
		if (this.sideA + this.sideB > this.sideC && this.sideA + this.sideC > this.sideB && this.sideB + this.sideC > this.sideA) {
			return this.sideA + this.sideB + this.sideC;
		} else {
			return 'Ошибка! Треугольник не существует';
		}
	}
	get area() {
		if (this.sideA + this.sideB > this.sideC && this.sideA + this.sideC > this.sideB && this.sideB + this.sideC > this.sideA) {
			const semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;
			const sq = Math.sqrt(semiPerimeter * (semiPerimeter - this.sideA) * (semiPerimeter - this.sideB) * (semiPerimeter - this.sideC));
			return parseCount(sq.toFixed(3));
		} else {
			return 'Ошибка! Треугольник не существует';
		}
	}
}

function getTriangle(sideA, sideB, sideC) {
	try {
		return new Triangle(sideA, sideB, sideC);
	} catch (error) {
		 return Object = {}
		};
}








    


