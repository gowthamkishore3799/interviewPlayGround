var findSizeofSpiral = function(matrix){
    return [matrix.length, matrix[0].length];
}


var spiralOrder = function(matrix) {


    let [m, n] = findSizeofSpiral(matrix);


    var isValid = function(){


       let [x, y] = directions[traversalPointer]
       let newX = i+x;
       let newY = j+y





       if(visited[`${newX}%${newY}`] || newX<0 || newY<0 || newX>= m || newY>=n){
         return false;
       }

       return true;
    }


    let directions = [[0,1], [1,0], [0,-1], [-1,0 ]]
    let i =0, j=0, totalElements = 0
    let finalSpiral = [];
    let traversalPointer = 0;
    let visited = {}

    while(totalElements < (m*n)){
        finalSpiral.push(matrix[i][j]);
        totalElements ++;


        visited[`${i}%${j}`] = true;

        if(!isValid()){
            traversalPointer = (traversalPointer+1) %4
            i = i + directions[traversalPointer][0];
            j = j + directions[traversalPointer][1];
        } else{
            i = i + directions[traversalPointer][0];
            j = j + directions[traversalPointer][1];

        }
    }

    return finalSpiral;
}


console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))