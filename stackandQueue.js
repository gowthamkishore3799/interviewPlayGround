const stackandQueue = function(){


    let arr = [3,4,2,6,5];


    const dfs = function(arr){

        if(arr.length==1){
            return arr
        }

        let lastElement = arr[arr.length-1]

        const reverse = dfs(arr.splice(0, arr.length-1)).reverse();
        return [...reverse, lastElement]
    }


    return [arr[arr.length-1], ...dfs(arr.splice(0,arr.length-1))]
}

console.log(stackandQueue([3,4,2,6,5]))


// 5 2 3 4 6


// 6 4 3 2

// 2 3 4


// 2


// 3 4







