function birthday(s, d, m) {
    // Write your code here
    /**
     * Cases are when j-1+1 == m && sum(i to j) == d
     * push the set to array 
     * 
     * and j = j+1;
     * i=i+1;
     * 
     * if i-1+1> m
     * 
     *   i = i+1;
     *   sum = sum-a[i];
     * 
     * 
     * if i-1
     */

    let i = 0, j = 0;

    let sum = 0, count = 0;


    while(j < s.length){
        sum = sum + s[j];
        if(j-i+1 == m){
            if(sum == d){
                count++;
            }

            sum = sum-s[i];
            i++;
        } 


        j++;
    }

    return count;

}


console.log(birthday([2,2,1,3,10, 10, 15, 5, 20, 0], 20, 2))

// birthday([1,2,3,3,10,6,7,3,0], 10, 3)