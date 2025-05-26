function findNumber(numbers, num){
        let left = 0, right = numbers.length;


        while(left<right){
            let mid = Math.floor((right+left)/2);
            if(numbers[mid] > num){
                right = mid
            } else{
                left = mid+1;
            }
        }
        console.log(left, num, "Result.")

        return left-1;
    }
function twoSum(numbers, target) {

        for(let i=0; i< numbers.length; i++){
            let diff = target-numbers[i]
            console.log(i, diff)

            let index = findNumber(numbers, diff)

            if(numbers[index] == diff && index !=i){
                return [numbers[i], numbers[index]];
            }
        }
        return [-1,-1]
    }

    console.log(twoSum([2,3,4], 6))