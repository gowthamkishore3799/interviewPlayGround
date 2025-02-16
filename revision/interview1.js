const maximumSubArrayProblem = function(nums){

    if(nums.length <=1){
        return [];
    }


    let dp = new Array(nums.length);

    dp[0] = nums[0];



    for(let i=1; i<nums.length;i++){
        dp[i] = Math.max(nums[i], nums[i] + dp[i-1]);
    }

    return Math.max(...dp)
}


console.log(maximumSubArrayProblem([-1, -2, -3, -4]))




const isValidbinarySearchTree = function(root){




    let queue = [[root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]];


    while(queue.length){

        let [root, min, max] = queue.shift()


        if(root?.val < min || root?.val> max){
            return false;
        }


        queue.push(root?.left, min, root?.val);
        queue.push(root?.right, root?.val, max);
    }



}


const groupAnagrams = function(values){

    let hashMap = new Map();


    for(let value of values){
        let arr = new Array(26);


        for(let i=0; i<value.length; i++){

            let index = value.charCodeAt(i)-97
            arr[index] += 1
        }


        hashMap.set(arr, (hashMap.get(arr) || []).push(value) )
    }



   Object.values(hashMap).forEach((element)=>{
         result.push(element)
    })

    return result
}


const sortIntervals = function(intervals){

    let [min, max] = intervals.length

    for(let i=1; i< intervals.length; i++){
        let [newStart, newEnd ] = intervals[i];

        if(max< intervals[i]){
            result.push([min, max]);
        } else{
            min = Math.min(min, newStart);
            max = Math.max(max, newEnd);
        }
    }


    result.push([min, max])
}