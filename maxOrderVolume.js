
var maxOrderVolume = function(n, startTime, duration, orderValue) {

    let orderInfo = startTime.map((value, index)=>{
        return {
            time: value,
            order: orderValue[index],
            duration: duration[index]
        }
    }).sort((a,b)=> a.time-b.time)




    var dfs = function(index, time, memo = {}){


        if(index >=n){
            return 0;
        }

        let key = `${index}$${time}`


        if(key in memo){
            return memo[key]
        }


        var pickCall = time <= orderInfo[index].time ? orderInfo[index].order + dfs(index+1, orderInfo[index].time +orderInfo[index].duration, memo) : 0;

        var skipCall = dfs(index+1, time, memo);



        memo[key] = Math.max(pickCall, skipCall)
        return memo[key];
    }


    return dfs(0,0, {})
}



console.log(maxOrderVolume(5, [10,5,15,18,30], [30,12,20,35,35],[50,51,20,25,10]))



/**
 * Similar to knapsack
 * 
 * 
 * if(index>=n){
 * return 0;
 * }
 * 
 * 
 * 
 * 
 * 
 * var processJob = currentTime <= call[index].starttime ?  order + call[index].orderaValue + dfs(index+1, time+call[0].duration);
 * var skipJob = dfs(index+1, time)
 * 
 * 
 * memo[time] = Math.max(processJob, skipJob);
 * 
 * 
 * return result;
 */