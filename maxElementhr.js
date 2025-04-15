function maxElement(n, maxSum, k) {
    // Write your code here




    if(maxSum % n == 0){
        return maxSum/n;
    }

    console.log(maxSum, n)


    let num = Math.floor(maxSum/n);

    console.log(num)


    return num * (n-1) && num+1 <= maxSum ? num+1 : num;
}


console.log(maxElement(379571,558557,379570))
/**
 * divide a element of maxsum % k == 0
 * 
 * return the quotient
 * 
 * else
 * 
 * 
 * Math.floor(maxusm)/k *(n-1) + Math.ceil(maxsu/k)
 * 
 * 
 */