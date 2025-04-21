const calculatedifferenceValue = function(st1, st2){

    /**
     * Algorithm
     * 
     * 
     * 
     * dfs:
     * 
     * 
     * if(str1[i] == str2[j]){
     * 
     * count++;
     * 
     * } e0lse {
     *  if(str1[i] not in hashmap){
     * skip the i and go to next element in f1 i
     * 
     * 
     * if(str[i] in hashmap){
     *    dfs(i+1, j, min = math.min(i, min), max=math.max(max, i)) || dfs(i, j+1,  min = math.min(j, min), max=math.max(max, j))
     * }
     * }
     * 
     * }
     * 
     * dfs(0,0);
     * 
     * 
     */

    var dfs = function(i, j, min, max, hashmap){


        if(i== st1.length || j == st2.length){
            return Math.abs(i-j+1)
        }




        if(st1[i] == st2[j]){
            return dfs(i+1, j+1, min, max);
        } else{

            if(!(st1[i] in hashmap)){
                return dfs(i+1, j, min, max)
            } else{
                return Math.min(dfs(i+1, j,Math.min(i, min), Math.max(i, max)), dfs(i, j+1,Math.min(j, min), Math.max(j, max)));
            }
        }
    }




    return dfs(0,0, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)


}


console.log(calculatedifferenceValue("ABCDE", "ADCE"))


/**
 * If i and j matches
 *  do to dfs
 * 
 * to next
 * 
 * 
 * 
 * 
 * 
 * if i and j doesnt match
 * 
 * if i doesnt match..
 * 
 * go to next i
 * 
 * 
 * if j doesnt match, either skip(i+1, j) or next element(i, j+1)....
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */