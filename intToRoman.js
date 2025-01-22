/**
 * @param {number} num
 * @return {string}
 */



/**
 * Algorithms
 * 
 * first split the number from front
 * 
 * 3749
 * 
 * Eg: 3 * Math.pow(10,number.length-1);
 * 
 * if its not 4 or 9
 *  i: find the max element using for loop but less than number
 * 
 * [1, 5, 10, 50, 100, 500, 1000]
 * 
 * 
 * Math.floor(3000/1000) = 3 , so have a hasmap and append {1000 3 times}
 * 
 * go to next element
 * 
 * 7/5 = 1
 * 
 * 5, 2 and use the rest from hashmap
 * 
 * 
 * if its 9 or 4, 
 * 90
 * 
 * find max elment to it 1000 or 900 and find next elemet from hashmap
 * 
 * 
 * 
 * 
 *    XL
 * 
 * 
 */

var intToRoman = function(num) {

    let hashmap = {
        1	: "I",
        5 : "V",
        10 : "X",
        50 : "L",
        100 : "C",
        500 : "D",
        1000 : "M"
    }

    let romanIntNumber = [1,5,10,50, 100, 500, 1000]
    let result = "";

    for(let i=0; i<num.length; i++){

        if(num[i] == 0){
            continue;
        }
        let number = num[i] * Math.pow(10, num.length-i-1)
        if(num[i]==4 || num[i]==9){
            let min = 0
            let val = ""
            while(number > 0){
                for(let j=romanIntNumber.length-1; j>=0; j--){
                    if(romanIntNumber[j] < number){
                        break;
                    }
                    min = romanIntNumber[j];
                }
                val = hashmap[min] + val;
                number = min-number
            }

            result += val;

        } else {
            let max = 0
            while(number > 0){
                for(let j=0; j<romanIntNumber.length; j++){
                    if(romanIntNumber[j] > number){
                        break;
                    }
                    max = romanIntNumber[j];
                }
                result = result + (hashmap[max]).repeat(Math.floor(number/max));
                number = number-(max * Math.floor(number/max))
            }
        }
    }

    return result;
};


 console.log(intToRoman("58"));