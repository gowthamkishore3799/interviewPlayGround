const taskScheder = function(n, cost, time){


    // let costTime = cost.map((_, index)=>({
    //         weight: cost[index]/time[index],
    //         cost: cost[index],
    //         time: time[index]
    // })).sort((a,b)=> a.weight-b.weight);

    // console.log(costTime)

    // let freetime =0
    // let totalCost = 0
    // let j=n-1;
    // let i=0
    // while(i<j){
    //     if(freetime == 0){
    //         totalCost += costTime[i].cost;
    //         freetime += costTime[i].time

    //         console.log(costTime[i].cost, "Private Server")
    //         i++;
    //     } else {
    //         // totalCost;
    //         freetime--;
    //         j--;
    //     }
    // }

    let memo = {};
    var dfs = function(job, freetime){

        if(job == n){
            return 0;
        }

        let key = `${job}$${freetime}`


        if(key in memo){
            return memo[key]
        }



        let paidJob = cost[job] + dfs(job+1, freetime+time[job])
        let freejob = freetime>0 ? dfs(job+1, freetime-1) : Infinity;



        memo[key] = Math.min(paidJob, freejob)

        return memo[key]
    }

    return dfs(0, 0)
}

console.log(taskScheder(4, [1,2,3,2], [1,2,3,2]))
