/**
 * The bind() method creates a new function that, 
 * when called, has its this keyword set to the provided value, 
 * with a given sequence of arguments preceding any provided when the new function is called.
 */

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

const theDaVinciCode = {
	title: "The Da Vinci Code",
	author: "Dan Brown",
	yearOfRelease: 2003,
};

// using bind
const boundFunction = theFirm.getYearOfRelease.bind(theDaVinciCode);
const anotherBoundFunction = theFirm?.introduceAuthor?.bind(theDaVinciCode, "says hello");

boundFunction(); // prints 2003
anotherBoundFunction(); // prints Dan Brown says hello
