function diagonalDifference(arr) {
    let i = 0;
    let leftDiagonal = 0;
    while (i < arr.length) {
        leftDiagonal += arr[i][i];
        i++;
    }

    let rightDiagonal = 0, j = arr.length - 1;
    i = 0;




    





    while (i >= 0 && i < arr.length && j >= 0 && j < arr.length) {

        rightDiagonal = rightDiagonal + arr[i][j];
        i = i+1;
        j = j-1;

    }

    console.log(rightDiagonal, leftDiagonal)
    return Math.abs(leftDiagonal - rightDiagonal);

}

console.log(diagonalDifference([[1,2,3],[4,5,6], [9,8,9]]))