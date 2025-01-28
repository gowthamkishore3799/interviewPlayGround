var minimumTotal = function(triangle) {

    let min = Number.MAX_SAFE_INTEGER;
    let result = []

    var dfs = function(rowIndex, columnIndex, min, memo){
        console.log(memo)

        if(memo[`${rowIndex}${columnIndex}`]){
            console.log("Mmeo found...")
            return memo[`${rowIndex}${columnIndex}`]
        }


        if(rowIndex >= triangle.length){
            if(Number.isInteger(min)){
                result.push(min);
            }
            
            return min;
        }

        let minValues = triangle[rowIndex];

        let index = columnIndex

        while(index<=columnIndex+1){
            let result = dfs(rowIndex+1, index, min + minValues[index], memo);
            memo[`${rowIndex+1}$${index}`] = result;
            index++;
        }
    }


    dfs(0,0, 0, {})
    return Math.min(...result);
};

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))