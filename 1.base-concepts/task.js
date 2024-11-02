"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d > 0) {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
	}
	if (d === 0) {
		let x = -b / (2 * a);
		arr.push(x);
	}
	if (d < 0) {
		arr.push();
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let P = percent / 12 / 100;
	let S = amount - contribution;
	let monthlyPayment = S * (P + (P / (((1 + P) ** countMonths) - 1)));
	let totalMortgage = monthlyPayment * countMonths;
	return parseFloat(totalMortgage.toFixed(2));
}