/**
 * The call() allows for a function/method
 * belonging to one object to be assigned
 * and called for a different object.
 */
// Example of call without args
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

console.log("log-A", theFirm.getYearOfRelease()); // prints 1991

const theDaVinciCode = {
	title: "The Da Vinci Code",
	author: "Dan Brown",
	yearOfRelease: 2003,
};

console.log("log-B", theFirm.getYearOfRelease.call(theDaVinciCode)); // prints 2003

// Example of call with args

console.log(
	"log-C",
	theFirm.introduceAuthor("has written a total of 100 books")
); // prints "John Grisham has written a total of 100 books"

console.log(
	"log-D",
	theFirm.introduceAuthor.call(
		theDaVinciCode,
		"is an American author best known for this thriller novels"
	)
);
