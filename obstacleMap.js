const findObstaclesPath = function(map, m, n){


    console.log(map[0][0])
    let obstacles = [];

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(map[i][j] == "*"){
                obstacles.push(`${i}$${j}`);
            }
        }
    }

    return obstacles;
}


const isValid = function(x, y, m, n){
    if(x<0 || x>=m || y<0 || y>=n){
        return false;
    }
    return true;
}

const fillObstacles = function(dp, obstacles){


    let queue = [obstacles];
    let traverse = [[1,0], [-1,0], [0,1], [0,-1]];

    let visited = {};

    while(queue.length>0){

        let dimensions = queue.shift();
        let result = [];
        for(let point of dimensions){
            let [x,y]= point.split("$");
            visited[`${x}$${y}`] = true;
            for(let dir of traverse){
                let newX = parseInt(x)+dir[0];
                let newY = parseInt(y) + dir[1];
                if(isValid(newX, newY, dp.length, dp[0].length) && !visited[`${newX}$${newY}`]){
                    if(dp[newX][newY]==0){
                        dp[newX][newY] = dp[x][y] + 1;
                        result.push(`${newX}$${newY}`)
                        
                    }
                }
            }
        }
        if(result.length){
            queue.push(result);
        }
    }
}

const traverseAlong = function(dp){
    let [pointX, pointY] = [0,0];
    let [destinationX, destinationY] = [dp.length-1, dp[0].length-1];
    let traverse = [[1,0], [-1,0], [0,1], [0,-1]];
    let visited = {};

    let visitedDistance = []


    while(pointX != destinationX || pointY != destinationY){

        let maxDistance = Number.MIN_SAFE_INTEGER;
        let probX, probY;

        visited[`${pointX}${pointY}`] = true;



        for(let dir of traverse){
            let newX = pointX + dir[0];
            let newY = pointY + dir[1];
            if(isValid(newX, newY, dp.length, dp[0].length) && !visited[`${newX}${newY}`]){
                let currentDistance = dp[newX][newY];
                if(maxDistance < currentDistance){
                    maxDistance = currentDistance;
                    probX = newX;
                    probY = newY;
                }
            }
        }

        visitedDistance.push(maxDistance)
        pointX = probX;
        pointY = probY
    }


    return Math.min(...visitedDistance)

}


const obstacleMap = function(matr){

    let m = matr.length;
    let n = matr[0].length;
    let obstacles = findObstaclesPath(matr, m, n);

    console.log(obstacles)

    let dp = new Array(m).fill(0).map(()=> new Array(n).fill(0))
    fillObstacles(dp, obstacles);
    let minDistance = traverseAlong(dp);
    return minDistance;
}

console.log(obstacleMap([
    ["S", "*"], 
    [".", "E"]
]))

/**
 * First claculate obstacles in dp
 * 
 * if obstacles, just have them as 0
 * s and e as null.
 * 
 * from obstacles use bfs so minimum distance gets computer
 * 
 * 
 * once computed, from start 0,0 and traverse with maxiumum distance and push into array, from there, push into array...
 */