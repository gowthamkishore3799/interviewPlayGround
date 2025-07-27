var findXSum = function (nums, k, x) {


    let occurence = new Map();

    for (let i = 0; i < k; i++) {
        occurence.set(nums[i], (occurence.get(nums[i]) || 0) + 1);
    }
    let j = k - 1, i = 0;

    let result = []

    console.log(j,)

    while (j < nums.length) {

        let buckets = []

        for (let [key, value] of occurence.entries()) {
            if(value > 0) {
                buckets[value] = (buckets[value] || new Set()).add(key)
            }
            
        }


        let noOfAddition = 0;
        let finalSum = 0



        console.log(buckets, "Buckets..")
        for (let i = buckets.length - 1; i >= 0; i--) {

            if (buckets[i]) {
                let val = Array.from(buckets[i]).sort((a, b) => b - a);
                console.log(val)
                finalSum += val.reduce((sum, currVal) => {
                    if (noOfAddition < x) {
                        noOfAddition++;
                        return sum + (currVal * i)
                    };
                    return sum;
                }, 0)
                console.log(finalSum)
            }
        }

        if (j + 1 >= nums.length) {
            return result;
        }
        j++;
        let currentIOcc = (occurence.get(nums[i]) || 1) - 1


        occurence.set(nums[i], currentIOcc)
        i++;


        occurence.set(nums[j], (occurence.get(nums[j]) || 0) + 1)


    }




};

console.log(findXSum([9,2,2], 3, 3))


