function generateParenthesis(n) {

    /**
     * LEft left>0
     * 
     * 
     * 
     * 
     */

        let result = new Set();

        let leftcount = 0, rightCount = 0;

        var dfs = function(leftCount, rightCount, str){

            if (str.length === 2 * n) {
                result.add(str);
                return
            }

            if(leftCount < n){
                dfs(leftCount+1, rightCount, str+ "(");
            }


            if(rightCount < n && rightCount<leftCount){
                dfs(leftCount, rightCount+1, str+ ")");
            }
        }

        dfs(leftcount,rightCount, "")
        console.log(result, "Result")

        return Array.from(result);

    }

    console.log(generateParenthesis(2))