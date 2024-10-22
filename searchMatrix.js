var searchMatrix = function(matrix, target) {
    

    let [m, n]= [matrix.length, matrix[0].length];




    let i = 0, j = m*n-1, mid;


    while(i<=j){
        mid = Math.floor((i+j)/2);



        let iIndex =Math.floor(mid / n), jIndex = mid % n;

        console.log(iIndex, jIndex, i, j, mid, m, n)

        if(iIndex>= m || jIndex>= n){
            return false;
        }


        if(matrix[iIndex][jIndex] == target){
            return true;
        }


        if(matrix[iIndex][jIndex] > target){
            j = mid-1;
        } else{
            i=mid+1
        }
    }

    return false;

};


console.log(searchMatrix([[1,3]], 2))


/**
 * 
 */