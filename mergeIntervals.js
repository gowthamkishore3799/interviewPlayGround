var merge = function(intervals) {

    const result = [];
    let [min, max] = intervals[0];

    intervals.sort((a,b) => a[0]-b[0])


    for(let i =0; i < intervals.length-1; i++){

        if(max >= intervals[i+1][0]){
            max = Math.max(max, intervals[i+1][1]);
            min = Math.min(min, intervals[i+1][0]);

            console.log(min, intervals[i+1][0])
        } else {
            result.push([min, max]);
            min = intervals[i+1][0];
            max = intervals[i+1][1];
        }
      
    }

    result.push([min, max])
    return result;
};


console.log(merge([[1,4],[0,4]]))