
/**
 * Just sample code to build
 */

class Event{
    users;
    numberOfUsers
    constructor(numberOfUsers){
        this.numberOfUsers = numberOfUsers;
        this.users = new Array(numberOfUsers).fill(0);
        this.userInfo = new Map();
    }


    updateOfflineStatus(id, time){
        const range = this.userInfo.get(id) || [];
        this.userInfo.set(id, [...range, [time, time+ 60]])
    }


    // updateUsers(users){


    //     for(let i=0; i<)

    // }

    findActiveUsers(timeStamp, userIds){

        for(let i=0;i<userIds.length;i++){
            const offlinetimings = this.userInfo.get(i) || [];
            let j = 0
            let isActive = true;

            while(j<offlinetimings.length){
                let [start, end] = offlinetimings[j];
                if(timeStamp >= start && timeStamp <end ){
                    isActive = false;
                }
            }

            if(isActive){
                userIds[i]++;
            }
        }
    }

    findActiveMentionedUsers(timeStamp, mentions){
        let activeUserIds = new Array(this.numberOfUsers).fill(0)

        let users = mentions.split(" ");
        for(let user of users){
            let [id, _] = user.split("id")[0];

            const offlinetimings = this.userInfo.get(id) || [];
            let j = 0
            let isActive = true;

            while(j< offlinetimings.length){
                let [start, end] = offlinetimings[j];
                if(timeStamp >= start && timeStamp <end ){
                    isActive = false;
                }
            }
            if(isActive){
                activeUserIds[id]++;
            }

        }
    }




    updateMessageEvent(mentions, timeStamp){
        let activeUserIds = []
        switch(mentions){
            case "HERE":
                activeUserIds = new Array(this.numberOfUsers).fill(0)
                activeUserIds = this.findActiveUsers(timeStamp, activeUserIds);
                // updateUsers(activeUserIds);
            case "ALL":
                activeUserIds = new Array(this.numberOfUsers).fill(1)
                // this.updateUsers(activeUserIds);
            default:
                activeUserIds = this.findActiveMentionedUsers(timeStamp, mentions);
                // updateUsers(activeUserIds);

        }
    }


    displayUserInfo(){
        console.log(this.userInfo)
    }
}


var countMentions = function(numberOfUsers, events) {

    events.sort((a,b)=>a[1]-b[1]);


    let eventObj = new Event(numberOfUsers);

    //Then go through events
    for(let event of events){
        let [typeOfEvent, time, mentions] = event

        time = isNaN(time) ? parseInt(time): time;

        time = parseInt(time);
        switch(typeOfEvent){
            case "MESSAGE":
                eventObj.updateMessageEvent(mentions, time);
                break;
            case "OFFLINE":
                eventObj.updateOfflineStatus(mentions, time);
                break;
            default:
                console.log("Invalid Event");
        }
    }


    console.log(eventObj.displayUserInfo())
};


console.log(countMentions(2, [["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","12","ALL"]]))