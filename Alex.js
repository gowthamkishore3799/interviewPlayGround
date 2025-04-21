var maxDistToClosest = function(seats) {

    let totalSeats = seats.length;
    



    const leftClosest = new Array({length:totalSeats}).fill(Infinity);
    const rightClosest = new Array({length:totalSeats}).fill(Infinity);



    leftClosest[0] = seats[0] == 1 ? 0: Infinity;
    rightClosest[totalSeats-1] = seats[totalSeats-1] == 1 ? 0: Infinity;



    for(let i=1; i<totalSeats;i++){
        leftClosest[i] = seats[i] == 1 ? 0 : leftClosest[i-1]+1;
    }

    for(let i=totalSeats-2; i>=0;i--){
        rightClosest[i] = seats[i] == 1 ? 0 : rightClosest[i+1]+1;
    }

    console.log(leftClosest, rightClosest)

    let maxClosest = 1;


    for(let i=0; i<totalSeats; i++){
        maxClosest = Math.max(maxClosest, Math.min(leftClosest[i], rightClosest[i]))
    }

    return maxClosest
};


console.log(maxDistToClosest([1,0,0,0]))