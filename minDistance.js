var minDistance = function(word1, word2) {
    const memo = new Map();

    function dfs(i, j) {
        if (i === word1.length) return word2.length - j; // insert remaining
        if (j === word2.length) return word1.length - i; // delete remaining

        let key = `${i},${j}`;
        if (memo.has(key)) return memo.get(key);

        if (word1[i] === word2[j]) {
            memo.set(key, dfs(i + 1, j + 1));
        } else {
            let insert = 1 + dfs(i, j + 1);
            let del = 1 + dfs(i + 1, j);
            let replace = 1 + dfs(i + 1, j + 1);
            memo.set(key, Math.min(insert, del, replace));
        }

        return memo.get(key);
    }

    return dfs(0, 0);
};




console.log(minDistance("horse", "rse"))
/**
 * If word1 is less than word2, return -1
 * 
 * 
 * horse , ros
 * 
 * 
 * 
 * similar to knapsack problem
 * 
 * 
 * if i== j
 * 
 * counter++, i+1, j+1, or i+1, j
 * 
 * 
 * if(i >word1.length break || j >word2.length){
 * 3}
 * 
 * 
 */




