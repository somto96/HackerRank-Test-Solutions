// var N =9 

// const validateBoard = board => {
// 	var unique = Array(N + 1).fill(false);

// 	// Checking rows
// 	for (var i = 0; i < N; i++) {
// 		unique = Array(N + 1).fill(false);

// 		// Checking columns of each row
// 		for (var j = 0; j < N; j++){
// 			var Z = board[i][j];

// 		}
// 	}

// }
// var array3 = [1, 2, 4, 6, 1, 4, 9, 10, 2, 8];
// function findUniqueElements_3(array) {
// 	for (let i = 0; i < array.length; i++) {
// 		for (let j = i + 1; j < array.length; j++) {
// 			if (array[i] == array[j]) {
// 				array.splice(j, 1);
// 			}
// 		}
// 	}
// 	console.log(`from third way : ${array}`);
// }

// findUniqueElements_3(array3);


// JavaScript program to implement
// the above approach

var N = 9;

// Function to check if all elements
// of the board[][] array store
// value in the range[1, 9]
function isinRange(board)
{
	
	// Traverse board[][] array
	for(var i = 0; i < N; i++)
	{
		for(var j = 0; j < N; j++)
		{
			
			// Check if board[i][j]
			// lies in the range
			if (board[i][j] <= 0 ||
				board[i][j] > 9)
			{
				return false;
			}
		}
	}
	return true;
}

// Function to check if the solution
// of sudoku puzzle is valid or not
function isValidSudoku(board)
{
	
	// Check if all elements of board[][]
	// stores value in the range[1, 9]
	if (isinRange(board) == false)
	{
		return false;
	}

	// Stores unique value
	// from 1 to N
	var unique = Array(N+1).fill(false);

	// Traverse each row of
	// the given array
	for(var i = 0; i < N; i++)
	{
		unique = Array(N+1).fill(false);
        console.log("Testing", unique);
		

		// Traverse each column
		// of current row
		for(var j = 0; j < N; j++)
		{

			// Stores the value
			// of board[i][j]
			console.log("index of row", i)
			console.log("index of column", j)
			var Z = board[i][j];
            console.log("column-check", Z);
			console.log("unique[Z]", unique[Z]);

			// Check if current row
			// stores duplicate value
			if (unique[Z])
			{
                console.log("row-unique-1", unique[Z]);
				return false;
			}
			unique[Z] = true;
            console.log("row-unique-2", unique[Z]);
		}
	}

	// Traverse each column of
	// the given array
	for(var i = 0; i < N; i++)
	{

		// Initialize unique[]
		// array to false
		unique = Array(N+1).fill(false);

		// Traverse each row
		// of current column
		for(var j = 0; j < N; j++)
		{

			// Stores the value
			// of board[j][i]
			var Z = board[j][i];
			console.log("row-check", Z);
			console.log("unique[Z]", unique[Z]);

			// Check if current column
			// stores duplicate value
			if (unique[Z])
			{
				return false;
			}
			unique[Z] = true;
		}
	}

	// Traverse each block of
	// size 3 * 3 in board[][] array
	for(var i = 0; i < N - 2; i += 3)
	{
		
		// j stores first column of
		// each 3 * 3 block
		for(var j = 0; j < N - 2; j += 3)
		{

			// Initialize unique[]
			// array to false
			unique = Array(N+1).fill(false);

			// Traverse current block
			for(var k = 0; k < 3; k++)
			{
				for(var l = 0; l < 3; l++)
				{
					
					// Stores row number
					// of current block
					var X = i + k;

					// Stores column number
					// of current block
					var Y = j + l;

					// Stores the value
					// of board[X][Y]
					var Z = board[X][Y];

					// Check if current block
					// stores duplicate value
					if (unique[Z])
					{
						return false;
					}
					unique[Z] = true;
				}
			}
		}
	}

	// If all conditions satisfied
	return true;
}

// Driver Code
// var board = [ [ 7, 9, 2, 1, 5, 4, 3, 8, 6 ],
// 				[ 6, 4, 3, 8, 2, 7, 1, 5, 9 ],
// 				[ 8, 5, 1, 3, 9, 6, 7, 2, 4 ],
// 				[ 2, 6, 5, 9, 7, 3, 8, 4, 1 ],
// 				[ 4, 8, 9, 5, 6, 1, 2, 7, 3 ],
// 				[ 3, 1, 7, 4, 8, 2, 9, 6, 5 ],
// 				[ 1, 3, 6, 7, 4, 8, 5, 9, 2 ],
// 				[ 9, 7, 4, 2, 1, 5, 6, 3, 8 ],
// 				[ 5, 2, 8, 6, 3, 9, 4, 1, 7 ] ];
var board = [ [ 7, 7, 2, 1, 5, 4, 3, 8, 6 ],
				[ 6, 4, 3, 8, 2, 7, 1, 5, 9 ],
				[ 8, 5, 1, 3, 9, 6, 7, 2, 4 ],
				[ 2, 6, 5, 9, 7, 3, 8, 4, 1 ],
				[ 4, 8, 9, 5, 6, 1, 2, 7, 3 ],
				[ 3, 1, 7, 4, 8, 2, 9, 6, 5 ],
				[ 1, 3, 6, 7, 4, 8, 5, 9, 2 ],
				[ 9, 7, 4, 2, 1, 5, 6, 3, 8 ],
				[ 5, 2, 8, 6, 3, 9, 4, 1, 7 ] ];
if (isValidSudoku(board))
{
	console.log("Valid");
	console.log("Sudoku-valid", isValidSudoku(board));
}
else
{
	console.log("Not Valid");
    console.log("Sudoku-valid", isValidSudoku(board));
}


