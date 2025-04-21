function matrixBlockSum(mat, k){
    /**
     * First prefixsum;
     * 
     * 
     * 
     * 
     */
    let prefix = new Array(mat.length).fill(0).map(()=>{
        return new Array(mat[0].length).fill(0)
    })
    let result = new Array(mat.length).fill(0).map(()=>{
        return new Array(mat[0].length).fill(0)
    })


    console.log(prefix)

    for(let row=0; row<mat.length; row++){

        let rowSum = 0;
        for(let col=0; col< mat[0].length; col++){

            rowSum += mat[row][col]
            prefix[row][col] =rowSum;

            if(row>0){
                prefix[row][col] += prefix[row-1][col]
            }
        }
    }


    for(let row=0; row<mat.length; row++){

        let [top, bottom] = [Math.max(0, row-k), Math.min(mat.length-1, row+k)]
        for(let col =0; col<mat[0].length; col++){

            let [left, right] = [Math.max(0, col-k), Math.min(mat[0].length-1, col+k)]


            console.log(bottom, right)
            result[row][col] += prefix[bottom][right];


            if(top>0){
                result[row][col] -= prefix[top-1][right]
            }
            if (left > 0) {
                result[row][col] -= prefix[bottom][left - 1];
            }

            if (top > 0 && left > 0) {
                result[row][col] += prefix[top - 1][left - 1];
            }
        }
    }

    return result

}


console.log(matrixBlockSum([[1,2,3],[4,5,6],[7,8,9]], 1))