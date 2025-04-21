


/**
 * Algorithm
 * 
 * 
 * 1. First loop through last number
 * carry = 0
 * for(let i:lastNumber.lengthl; i>=0; i--){
 * 
 * lastNumerb[i] + remainder + carry
 * 
 * 
 * if sum>9: carry = 1
 * if(sum>9){
 * lastnumberofSum = 10%10
 * 
 * }
 * 
 * num = num/10
 * 
 * update in array
 * 
 * 
 * }
 * @param {*} num 
 * @param {*} k 
 */
var addToArrayForm = function(num, k) {

    let carry =0;
    let i = num.length-1;

    while(k>0 || carry>0){

        console.log(num[i], carry, i, k)
        let rem = k%10;

        let sum = (num[i] || 0) + rem + carry;


        if(sum>9){
            carry = 1;
            sum = sum %10;
        } else{
            carry = 0;
        }

        console.log(carry, "Carryy..")


        if(i<0){
            num.unshift(sum);
        } else{
            num[i] = sum;
            i--
        }

       

        k = Math.floor(k/10);

        
    }


    return num;
};


console.log(addToArrayForm([9,9,9], 1))