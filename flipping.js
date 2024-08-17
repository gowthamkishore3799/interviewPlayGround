function flippingMatrix(matrix) {
    // Write your code here


    let row = matrix.length;
    let column = matrix[0].length;


    sum = 0;


    for(let i =0; i< row/2; i++){
        for(let j = 0; j< column/2; j++){

            console.log(sum)
            sum += Math.max(matrix[i][j], matrix[i][column-j-1], matrix[row-i-1][j], matrix[row-i-1][column-j-1]);
        }
    }

    return sum;


}


// console.log(flippingMatrix([[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]]));
console.log(flippingMatrix([[1,2], [3,4]]))