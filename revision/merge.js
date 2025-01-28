var merge = function(nums1, m, nums2, n) {

    let i=m-1, j=n-1; k = m+n-1



    if(n==0){
        return nums1;
    }



    while(i>=0 && j>=0){
        if(nums1[i] > nums2[j]){
            nums1[k]= nums1[i];
            i--
        } else {
            nums1[k] = nums2[j];
            j--
        }
        k--;
    }


    while(j>=0){
        nums1[k] = nums2[j]
        k--
        j--
    }

    return nums1








}



console.log(merge([8,9,10,0,0,0], 3, [50,100,200], 3))