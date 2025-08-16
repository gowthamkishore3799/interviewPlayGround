const findElement = function(arr){

    let left = 0;
    let right = arr.length-1;


    while(left<= right){
        let mid = Math.floor((left+right)/2);

        if(arr[mid] < arr[mid+1] && arr[mid] < arr[mid-1]){
            return mid;
        }


        if(arr[mid] > arr[right]){
            left = mid+1
        }else{
            right = mid-1;
        }
    }

    return left


}

console.log(findElement([12, 3, 4, 5, 6, 7, 8, 9, 10]))