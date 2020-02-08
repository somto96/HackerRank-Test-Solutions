var matrix = [[1, -4], [6, 3]];
// console.log(matrix.length);


const determinantOfMatrix = (array) => {
    var numberOfRows = array[0].length;
    var numberOfCols = array.length;

    if(numberOfRows === 2 && numberOfCols === 2){
        // Use Butterfly method to get the determinant of the matrix
        var AD = array[0][0] * array[1][1];
        var BC = array[0][1] * array[1][0];
        var determinant = AD - BC;
        console.log(determinant);
    } else if (numberOfRows === 3 && numberOfCols === 3){
        // Use Sarrus method to get determinant
        var downwards = ((array[0][0] * array[1][1] * array[2][2]) + (array[0][1] * array[1][2] * array[2][0]) + (array[0][2] * array[1][0] * array[2][1]))
        var upwards = ((array[2][0] * array[1][1] * array[0][2]) + (array[2][1] * array[1][2] * array[0][0]) + (array[2][2] * array[1][0] * array[0][1]))
        
        var determinant  = downwards - upwards
        console.log(determinant);
    }

}

determinantOfMatrix(matrix);