var trap = function(height) {
    let left = [];
    let right = [];
    let ans=0;



    left[0] = height[0];
    right[height.length-1] = height[height.length-1];

    console.log(right)


    for(let i=1; i<height.length; i++){
        left[i]= Math.max(left[i-1], height[i])
    }


    for(let i=height.length-2; i>=0; i--){
        right[i]= Math.max(right[i+1], height[i])
    }

    for(let i=0; i< height.length-1; i++){
        ans += Math.min(left[i], right[i]) - height[i]
    }



    return ans;

    
};


/**
 * edge case, only two elements return null;
 * 
 * for(i<nums.length-1);
 * if(i==0){
 *   i++;
 * }
 * 
 * once i is found, find j j==i or i<j, while finding j keep track of volume.
 * 
 * 
 * 
 */


console.log(trap( [0,1,0,2,1,0,1,3,2,1,2,1]))








