var jobScheduling = function(startTime, endTime, profit) {
    /**
     * Simple, its similar to dynamic knapsack
     * 
     * 
     * when i first start
     * 
     * 
     * i=0, starttime
     * 
     * 
     * include the starttime like 50 + dfs(next index of complete time) , or next element before complete time 
     * 
     * 50 + 
     * 
     * 
     * Math.max(40 + next index of complete time), Math.max(70)
     */
    let jobs = [];

    for(let i=0; i<profit.length; i++){
        jobs.push([startTime[i], endTime[i], profit[i]])
    }

    jobs.sort((a,b)=> a[0]-b[0])




    return executeJobs(0, jobs);
};

function findNextJob(index, jobs){


    let previousJobTime = jobs[index][1];

    let low = index+1;
    let high = jobs.length-1;


    while(low<=high){
        let mid = Math.floor((low+high)/2);


        if(jobs[mid][0] == previousJobTime){
            return mid;
        }


        if(jobs[mid][0] < previousJobTime){
            low = mid+1
        } else{
            high = mid-1;
        }
    }


    return low;
}






var executeJobs = function(index, jobs){

    if(index>= jobs.length){
        return 0;
    }



    let nextJob = findNextJob(index, jobs);
    return Math.max(jobs[index][2] + executeJobs(nextJob, jobs), executeJobs(index+1, jobs))
}








console.log(jobScheduling([1,2,3,4,6], [3,4,5,6], [20,20,100,70,60]))











