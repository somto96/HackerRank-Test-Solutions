var a = "{([])}"; //valid
var b = "([{}]"; //invalid
var c = "{{(([[]]))}}"; //valid

const symbolsObj = {
	opening: {
		"{": "openingCurlyBrace",
		"(": "openingBrace",
		"[": "openingSquareBracket",
	},

	closing: {
		"}": "closingCurlyBrace",
		")": "closingBrace",
		"]": "closingSquareBracket",
	},
};

var filterSymbols = (sym) => {
	return sym.filter(sym => sym);
}

const stringChecker = (data) => {
	console.log("data", data);
	var stringArr = data.split("");
	console.log("stringArr", stringArr);

	var openingSymbols = [];
	var closingSymbols = [];
	for (var i = 0; i < stringArr.length; i++) {
		openingSymbols.push(symbolsObj?.opening?.[stringArr[i]]);
		closingSymbols.push(symbolsObj?.closing?.[stringArr[i]]);
	}

	// Filtering out the undefined values
	let filteredOpeningSymbols = filterSymbols(openingSymbols);
	let filteredClosingSymbols = filterSymbols(closingSymbols);

	console.log("opening-symbols", filteredOpeningSymbols);
	console.log("closing-symbols", filteredClosingSymbols);

	if(filteredOpeningSymbols?.length === filteredClosingSymbols?.length){
		console.log("this string is valid");
	}else {
		console.log("this string is not valid");
	};
};

stringChecker(b);
