var findOccurencesofLand = function(grid) {
    let land = []
    for(let i=0; i<grid.length; i++){
        for(let j=0;j<grid[0].length; j++){

            if(grid[i][j]== 1){
                land.push([i, j]);
            }
        }
    }

    return land
}




var numIslands = function(grid) {
    let lands = findOccurencesofLand(grid);
    let counter = 0;


    if(lands.length <=0){
        return counter
    }


    var isValid = function(x, y){
        return x>=0 && x<grid.length && y>=0 && y<grid[0].length;
    }
    



    let hashMap = new Map();
    const traversal = [[1,0], [0,1], [-1,0], [0, -1]];



    var dfs = function(x,y){

        if(hashMap.has(`${x}$${y}`)){
            return
        }


        hashMap.set(`${x}$${y}`, true);


        for(let direction of traversal){
            let newX = x+direction[0];
            let newY = y+direction[1];

            if(isValid(newX, newY) && grid[newX][newY] == 1){
                dfs(newX, newY)
            }
         }
    }


    for(let land of lands){
        let [x,y] = land
        if(!hashMap.has(`${x}$${y}`)){
            counter++;
            dfs(x,y)
        }
    }

    return counter



};

console.log(numIslands([
    ["1","1","1","0","0"],
    ["1","1","1","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]))