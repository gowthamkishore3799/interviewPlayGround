class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        let sarr = new Array(26).fill(0);
        let tarr =  new Array(26).fill(0);


        if(s.length != t.length){
            return false;
        }


        for(let i=0; i<s.length; i++){
            let index = s.charCodeAt(i)-97
            let tindex = t.charCodeAt(i)-97

            sarr[index] = sarr[index]+1;
            tarr[tindex] =  tarr[tindex]+1;
        }

        console.log(sarr, tarr)


        for(let i=0; i<sarr.length; i++){
            console.log(sarr[i], tarr[i])
            if(sarr[i] != tarr[i]){
                return false
            }
        }

        return true
    }


    twoSum(nums, target) {

        let visitedNum = new Map();
        for(let i=0; i<nums.length; i++){
            let diff = target-nums[i];


            if(visitedNum.has(diff)){
                return [visitedNum.get(diff),i]
            }

            visitedNum.set(nums[i], i)
        }

        console.log(visitedNum)
    }
}

let solution = new Solution()
// console.log(solution.isAnagram("jar", "jam"))
console.log(solution.twoSum([3,4,5], 7))
