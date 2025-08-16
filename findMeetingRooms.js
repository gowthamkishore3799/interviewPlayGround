function findMeetingRooms(meetings) {
    /**
     * [30, 10]
     * 
     * [10,30]
     * 
     */

    let meetingRooms = [];
    meetings.sort((a,b)=> a[0]-b[0])

    for (let meeting of meetings) {
        meetingRooms.sort((a, b) => a - b);



        if (meetingRooms.length == 0) {
            meetingRooms.push(meeting[1])
        } else{
            if(meeting[0] >= meetingRooms[0]){
                meetingRooms[0] = meeting[1];
            } else{
                meetingRooms.push(meeting[1]);
            }
        }

        
    }

    return meetingRooms.length;
}

console.log(findMeetingRooms([[0, 30], [45, 50], [30, 40]]))