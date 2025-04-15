var matrix = function(mat){

    let m = mat.length;
    let n = mat[0].length;


    var dfs = function(i, j, memo){

        if(i == m-1 && j == n-1){
            return [""];
        }

        if(i>=m || j >=n){
            return Infinity;
        }

        let key = `${i}&${j}`

        if (key in memo){
            return memo[key]
        }
            


        let rightArr = dfs(i, j+1, memo);
        let result = []

        if(rightArr!=Infinity){
            rightArr = rightArr.map((key,_)=>{
                return "H"+key
            })

            result = [...rightArr]
        }

        let downArray = dfs(i+1, j, memo);

        if(downArray != Infinity){
            downArray = downArray.map((key) => "V" + key);

            result = [...result, ...downArray];
        }

        memo[`${i}&${j}`] = result;

        return memo[`${i}&${j}`];
    }
    return dfs(0, 0, {})
}


console.log(matrix([
    [1, 2, 3,4],
    [4, 5, 6,5],
    [7, 8, 9,3]
  ]))

/**
 * for evert node, i can go to 0+1, 0 or 0, 0+1
 * 
 * 
 * 
 * if(i==m && j ==n){
 * return ""
 * 
 * 
 * }
 * 
 * var left = H+ dfs(0+1, 0)
 * var right = V+ dfs(0, 0+1)
 * 
 * 
 * 
 * 
 * VH
 */


// 00



// HV  VH



// [V] [H]
// 01 10




// var right = H + dfs()


// Infinity

// var right = V + [];


// [V]
