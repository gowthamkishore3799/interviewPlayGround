/**
 * Start from 0,0 and then use traversal, 
 * 
 * 
 * if visited or out of bounds, change the index..
 * 
 * 
 * if index is more than 3, divide by 4
 * 
 * 
 */


var findsizeofMatrix = function(matrix){
    return [matrix.length, matrix[0].length];
}


var isAboveDimension = function(i, j, n, m){
    if(i<0 || i >=n || j<0 || j>= m){
        return true;
    }
    return false
}

var spiralOrder = function(matrix) {
    const [n,m] = findsizeofMatrix(matrix);


    const traversal = [[0,1], [1,0], [0,-1], [-1,0]];
    
    let ans = [];
    let visited = {}, index = 0, i=0, j = 0;

    while(ans.length < n*m){


        ans.push(matrix[i][j]);
        visited[`${i},${j}`] = true;


        let newi = i + traversal[index][0], newj = j + traversal[index][1];
        if(visited[`${newi},${newj}`] || isAboveDimension(newi, newj, n, m) ){
            index = index+1 > 3 ? 0 : index+1; // to make sure elements are done
            
        }
        i += traversal[index][0], j+= traversal[index][1];
       
    }

    return ans;
};


console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))