var isPerfectSquare = function(num) {

    if(num<=1){
        return true;
    }
    let half = Math.floor(num/2);


    

    let arr = [];


    let k = num%2 == 0? 2 : 1




    for(let i=k; i<= half; i=i+2){
        arr.push(i)
    }


    let i=0, j = arr.length-1;
    let mid;


    while(i<=j){
        mid = Math.floor((i+j)/2);
        let midSquare = arr[mid]* arr[mid];
        if(midSquare == num){
            return true;
        }


        if(midSquare > num){
             j = mid-1;
        } else {
            i = mid+1
        }
    }

    return false;
};



var isPerfectSquare = function(num) {
    let left = 1;
    let right = Math.floor(num / 2) + 1;
  
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
  
      if (mid * mid === num) {
        return true;
      }
  
      if (mid * mid > num) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    return false;
  };
console.log(isPerfectSquare(2000105819))



/**
 * Find the num/2
 *  and if its odd, fill it with odd
 * if even, fill it with even
 * 
 * 
 * and do binary search
 * 
 * if mid * mid == num
 * return else 
 * 
 * 
 */


// [2,4,6]