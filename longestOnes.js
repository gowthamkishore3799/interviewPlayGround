var longestOnes = function(nums, k) {
    let i =0, j = 0;

    let zeroCounter = k;
    let counter = 0, max = Number.MIN_SAFE_INTEGER;


    if(nums.length<k){
        return nums.length;
    }


    while(j< nums.length){


        if(nums[j] == 1){
            counter++;
            j++;
        } else {


            if(zeroCounter >0){
                counter++;
                j++;
    
                zeroCounter--;
            } else{
                counter--;
                if(nums[i] == 0){
                    zeroCounter++;
                };
                i++;
    
            }
        }
        max = Math.max(max, counter);
    }

    return max

};


console.log(longestOnes([0, 0, 0, 0],0))
/**
 * First find the i=0; and increement j
 * 
 * assign k = counter
 * 
 * 
 * increment j
 * and assign the value of j-i-k-counter and compare with max length
 * for every 0, decreement the counter, 
 * 
 * 
 * 
 * 
 * 
 * 
 */



/**
 * start moving the window...
 * decrement 1 or 0 counter..
 * 
 * make sure the windows is proper, then go to top
 */