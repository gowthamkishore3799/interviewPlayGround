var removeDuplicates = function(nums) {


    let i = 1;

    let alreadyInsertedElement = nums[0];

    let elementIndex = 1;


    while(i<nums.length){

        if(nums[i] != alreadyInsertedElement){
            nums[elementIndex] = nums[i];
            alreadyInsertedElement = nums[i];
            elementIndex++;
        }  

        i++;
    }

    return elementIndex;
}


console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))