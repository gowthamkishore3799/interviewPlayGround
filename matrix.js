/**
 * @param {character[][]} matrix
 * @return {number}
 */

var maximalSquare = function(matrix) {
    let hashMap = {};
    let matrixrow = matrix.length;
    let matrixColumn = matrix[0].length;
    let max = 0;
    if (matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    
    var bfs = function(row, column) {



        if(row>= matrixrow || column >= matrixColumn){
            return 0;
        }


        if(!hashMap[`${row},${column}`]){


        let down = bfs(row+1, column);
        let diagonal = bfs(row+1, column+1);
        let right = bfs(row, column+1);


        hashMap[`${row},${column}`] = 0;


        if(matrix[row][column] == 1){
            let val = 1+ Math.min(down, diagonal, right);
            hashMap[`${row},${column}`] = val
        }
        }

        return hashMap[`${row},${column}`];

    }


    
    bfs(0,0)
    let maxLen = Math.max(...Array.from(Object.values(hashMap)))
    return Math.pow(maxLen, 2)
};