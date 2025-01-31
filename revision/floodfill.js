let findGridSize = function(image){
    return [image.length, image[0].length];
}


var floodFill = function(image, sr, sc, color) {

    let [m,n] = findGridSize(image);


    if(sr > m-1 || sc>n-1){
        return image
    }

    /**
     * first if more than grid size, return directly
     * 
     * 
     * recursion using 0,0 and traverse along all points... and use hashmap to avoid complexity...
     */

    let currentPixelValue = image[sr][sc];
    let traversal = [[1,0], [-1, 0], [0,1], [0, -1]];
    let hashMap = new Map();




    var dfs = function(i, j){



        if(i<0 || j<0 || i>m-1 || j>n-1){
            return;
        }


        if(image[i][j] != currentPixelValue){
            return;
        }


        if(hashMap.has(`${i}$${j}`)){
            return;
        }



        image[i][j] = color;
        console.log("Insie.")
        hashMap.set(`${i}$${j}`, true);

        for(let traverse of traversal){
            dfs(i+traverse[0], j+traverse[1]);
        }
    }


    dfs(sr,sc)

    return image;
}



console.log(floodFill([ [ 0, 0, 0 ], [ 0, 1, 0 ] ], 1,1, 2));