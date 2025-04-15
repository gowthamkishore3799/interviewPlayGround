
const taskSchedling = function(cost, time){

    const deleteTasksAtServer = function(time){

        if(privateServer.length && privateServer[0] == time){
            privateServer.pop();
        }
    
    
        if(freeServer.length && freeServer[0] == time){
            freeServer.pop();
        }
    }    

    let currentTime = 0;
    let freeServer = [];
    let privateServer = [];

    let totalcost = 0;
    for(let i=0; i<cost.length;i++){
        deleteTasksAtServer(currentTime) // deletes tasks from servers for new tasks...


        if(privateServer.length <=0){
            privateServer.push(currentTime+time[i])
            totalcost += cost[i];
        } else if(freeServer.length<=0) {
            freeServer.push(currentTime+1)

            currentTime++;
        }
    }
    console.log(totalcost)
}

console.log(taskSchedling([1,2,3,2], [1,2,3,2]))