/**
 * The apply() method calls a function with a given this value,
 * and arguments provided as an array (or an array-like object).
 */
// Example of apply without args
const theFirm = {
	title: "The Firm",
	author: "John Grisham",
	yearOfRelease: 1991,
	getYearOfRelease() {
		return this.yearOfRelease;
	},
	introduceAuthor(message) {
		return `${this.author} ${message}`;
	},
};

console.log(theFirm.getYearOfRelease()); // prints 1991

const theDaVinciCode = {
	title: "The Da Vinci Code",
	author: "Dan Brown",
	yearOfRelease: 2003,
};

console.log(theFirm.getYearOfRelease.apply(theDaVinciCode)); // prints 2003

// Example of apply with args

console.log(theFirm.introduceAuthor("has written a total of 100 books"));
console.log(
	theFirm.introduceAuthor.apply(theDaVinciCode, [
		"is an American author best known for this thriller novels",
	])
);
