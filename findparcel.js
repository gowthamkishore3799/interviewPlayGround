function isDistributedProperly(mid, parcelCount, len){


    let sum = ((len-1) * (mid-1)) + mid;

    return sum>parcelCount;

}


function findparcels(parcelCap, extra){
    let sumofParcels = parcelCap.reduce((acc, curr)=> acc + curr, 0) + extra;

    let min = Math.min(...parcelCap);
    let max = Math.max(...parcelCap);


    let high = min + extra;
    let low = max;

    while(low<high){
        let mid = Math.floor((low+high)/2)
        if(isDistributedProperly(mid, sumofParcels, parcelCap.length)){
            high = mid-1;
        } else{
            low = mid+1;
        }
    }

    return low-1

}

console.log(findparcels(Array(100000).fill(1), 9999999))