var rotate = function(matrix) {
    matrix = tranposeofMatrix(matrix);
    console.log(matrix)
    matrix = reverseofMatrix(matrix);
    return matrix;
};


var tranposeofMatrix = function(matrix) {
    const visited = {};


    for(let i =0; i< matrix.length; i++){
        for(let j =0; j< matrix[0].length; j++){


            if(visited[`${i}${j}`] || visited[`${j}, ${i}`]){
                continue;
            }

            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;


            visited[`${i}, ${j}`] = true;
            visited[`${j}, ${i}`] = true;
        }
    }
    return matrix
}


var reverseofMatrix = function(matrix) {
    for(let i =0; i< matrix.length; i++){
        for(let j =0; j< Math.floor(matrix[0].length/2); j++){
            let image = matrix[0].length-j-1;
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][image];
            matrix[i][image] = temp;
        }
    }

    return matrix
}


console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))



