function getMinConnectionCost(warehouseCapacity, additionalHubs) {
    // Write your code here

    let result = [];
    for(let hubIndex =0; hubIndex<additionalHubs.length; hubIndex++){

        let hub = additionalHubs[hubIndex];
        hub.push(warehouseCapacity.length)

        let locationofHub = 0;
        let distance = 0;

        for(let i=0; i<warehouseCapacity.length;i++){
            
            let currentHubPos = locationofHub < hub.length ? hub[locationofHub]-1 : warehouseCapacity.length-1
            if(i == currentHubPos){
                locationofHub++;
                continue;
            }

            if(i<=currentHubPos){
                distance =  distance + (warehouseCapacity[currentHubPos] - warehouseCapacity[i])
            }

           

        }


        result.push(distance)
    }

    return result;
    
    

}


console.log(getMinConnectionCost([0,2,5,9,12,18], [[2,5], [1,3]]))