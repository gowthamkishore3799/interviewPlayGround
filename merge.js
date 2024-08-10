var merge = function(nums1, m, nums2, n) {

    /**
     * Edge cases, no n;
     * 
     * no m is not possible;
     */

    if( n==0 ){
        return nums1;
    }



    let i=m-1; j =n-1, k=m+n-1;


    while(i>=0 && j>=0){
        if(nums1[i]> nums2[j]){
            nums1[k] = nums1[i]
            i--;
        } else {
            nums1[k] = nums2[j]
            j--;
        }
        k--;
    }

    while(j>=0){
        nums1[k] = nums2[j];
        j--;
        k--;
    }

    console.log(nums1)

    

};

console.log(merge([4,5,,6,8,9], 3, [1,8,9], 3))

// console.log([1,2,4,0],  [2,5,6])
/**
 * n=0, return m
 * 
 * 
 * 
 * 
 */