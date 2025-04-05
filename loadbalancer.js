const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

class ServerSetup{
    serverAvailability;
    noOfServers;
    totalNoofServers;
    constructor(noOfServers){
        this.noOfServers = noOfServers;
        this.totalNoofServers = noOfServers
        this.serverAvailability = []
    }


    checkIfServerisAvaiable(arrivalTime){

        if(this.serverAvailability<=0){
            return false;
        }

        return arrivalTime>=this.serverAvailability?.[0]?.availableTime;
    }

    isFreeServerAvailable(){
        return this.noOfServers>0
    }

    findParent(index){
        return Math.floor((index-1)/2);
    }



    addNewServer(availableTime){
        this.addServer(1)
    }


    insertNewServer(){
        this.noOfServers -=1;
        this.serverAvailability.push({ availableTime: 1, serverNumber: this.totalNoofServers-this.noOfServers});
        this.sortServerAvaiblability();
    }

    sortServerAvaiblability(){
        let index = this.serverAvailability.length-1
        let parent = this.findParent(index);

        let isSwap = true;


        while(isSwap){
            if(this.serverAvailability[index]?.availableTime< this.serverAvailability[parent]?.availableTime){
                [this.serverAvailability[index] , this.serverAvailability[parent] ] = [this.serverAvailability[parent] , this.serverAvailability[index] ]
                index = parent;
            } else{
                isSwap = false;
            }
        }
    }

    findLeftChild(index){
        return 2*(index) + 1;
    }

    findRightChild(index){
        return 2*(index) + 2;
    }

    currentServerFreeBeforeNextServer(freeServerAvilableTime){

        let subsequentFreeServer1AvaiableTime = this.serverAvailability[this.findLeftChild(0)]?.availableTime || Number.MAX_SAFE_INTEGER;
        let subsequentFreeServer2AvaiableTime =  this.serverAvailability[this.findRightChild(0)]?.availableTime || Number.MAX_SAFE_INTEGER;
        if(freeServerAvilableTime?.availableTime < subsequentFreeServer1AvaiableTime && freeServerAvilableTime?.availableTime < subsequentFreeServer2AvaiableTime){
            return true;
        }

        return false;
    }

    serveRequest(arrivalTime, burstTime){
        let freeServerAvilableTime = this.serverAvailability[0];


        freeServerAvilableTime.availableTime =  arrivalTime+ burstTime;
        if(this.currentServerFreeBeforeNextServer(freeServerAvilableTime, 0)){
            this.serverAvailability[0] = freeServerAvilableTime;
        } else{
            this.serverAvailability[0] = this.serverAvailability[this.serverAvailability.length-1];
            this.serverAvailability[this.serverAvailability.length-1] = freeServerAvilableTime;
            this.balanceFreeServers();
        }

        return freeServerAvilableTime.serverNumber;
    }


    balanceFreeServers(){
        let parent = 0;
        let index = parent;



        while(index != parent){
            let index = parent;

            let leftChild = this.findLeftChild(index)
            let rightChild = this.findRightChild(index)

            if(this.serverAvailability[leftChild]?.availableTime && this.serverAvailability[leftChild]?.availableTime < this.serverAvailability[index]?.availableTime){
                index = leftChild;
            } else if(this.serverAvailability[rightChild] && this.serverAvailability[rightChild]?.availableTime < this.serverAvailability[index]?.availableTime){
                index = rightChild;
            }

            if(index != parent){
                [this.serverAvailability[parent], this.serverAvailability[index]] = [this.serverAvailability[index], this.serverAvailability[parent]]
                parent = index;
            }
        }
    }

    assignrequest(arrivalTime, burstTime){
        /**
         * check if server is available
         * 
         * if not, load from free serve list and assign it
         */


        let isServerAvailable = this.checkIfServerisAvaiable(arrivalTime);

        if(isServerAvailable){
            return this.serveRequest(arrivalTime, burstTime);
        } else if(this.isFreeServerAvailable()){

            this.insertNewServer();
            return this.serveRequest(arrivalTime, burstTime)
        } else {
            return -1
        }
    }
}



const loadbalancer = function(noOfServers, arrivalTime, burstTime){

    for (let i = 0; i < arrivalTime.length; i++) {
        for (let j = 0; j < arrivalTime.length - i - 1; j++) {
            if (arrivalTime[j] > arrivalTime[j + 1]) {
                [arrivalTime[j], arrivalTime[j + 1]] = [arrivalTime[j + 1], arrivalTime[j]];
                [burstTime[j], burstTime[j + 1]] = [burstTime[j + 1], burstTime[j]];
            }
        }
    }





    const server = new ServerSetup(noOfServers);
    let assignedServer = []

    for(let i =0; i< arrivalTime.length; i++){
        assignedServer.push(server.assignrequest(arrivalTime[i], burstTime[i]));
    }
    /**
     * Min queue
     * 
     * check if the min is availabel and add
     * 
     * if no min is available, add one more server and add it
     * 
     * if no server to add, return -1
     */

    return assignedServer;
}


console.log(loadbalancer(3, [2, 4, 1, 8, 9], [7, 9, 2, 4, 5]))
