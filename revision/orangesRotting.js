var orangesRotting = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    const queue = []
    let countOfOranges = (grid, m, n) => {
        let freshOrangesCount = 0,
            rottenOranges = 0;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] == 2) {
                    rottenOranges++;
                    queue.push([i, j])
                }
                if (grid[i][j] == 1) freshOrangesCount++;
            }
        }
    
        return {
            freshOrangesCount,
            rottenOranges
        }
    }
    let {
        freshOrangesCount,
        rottenOranges
    } = countOfOranges(grid, m, n)
    let counter = 0;
    

    if (freshOrangesCount <= 0) {
        return 0;
    }

    if (rottenOranges <= 0) {
        return -1;
    }


    var callBFS = (newI, newJ) => {
        if (newI < 0 || newJ < 0 || newI >= m || newJ >= n) {
            return;
        }

        if (grid[newI][newJ] == 1) {
            queue.push([newI, newJ])
            grid[newI][newJ] = 2;
            freshOrangesCount--;
        }
    }


    while(queue.length>0){
        const n = queue.length;
        for(let k =0;k<n; k++){
            const [pair0, pair1] = queue.shift();
            callBFS(pair0+1, pair1);
            callBFS(pair0-1, pair1);
            callBFS(pair0, pair1+1)
            callBFS(pair0, pair1-1);
        }

        if(queue.length>0){
            counter++;
        }
    }

    return freshOrangesCount == 0 ? counter : -1;
};