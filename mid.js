var peakIndexInMountainArray = function(arr) {
    let left = 0, right = arr.length-1


    while(left < right){

        let mid = Math.floor((left+right)/2)
        if(arr[mid]> arr[mid+1]){
            right = mid;
        } else {
            left = mid+1;
        }
    }


    return left;
};


console.log(peakIndexInMountainArray([0,1, 2,5, 0]))