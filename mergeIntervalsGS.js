/**
 * This is part of a subproblem which i tried to solve
 * @returns 
 */


var mergeIntervals = function(){
    let arr = [[1,1],[1,3],[5,8]];


    let [min, max] = arr[0];
    let i = 1;
    let result = [];

    while(i<arr.length){


        if(max < arr[i][0]){
            result.push([min, max]);
            min = arr[i][0];
            max = arr[i][1];
        } else {
            min = Math.min(min, arr[i][0]);
            max = Math.max(max, arr[i][1])
            i++
        }
    }


    result.push([min, max])
    console.log(result);
    return;
}




mergeIntervals();