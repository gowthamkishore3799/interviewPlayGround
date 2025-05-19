var bulbSwitch = function(n) {
    /**
     * Have dp of size n
     * 
     * if i = 0 return 0
     * 
     * 
     * else start from i=2 to n-1
     * 
     * 
     * if i=2, if i+1%2 == 0, turn off the light
     * 
     * 
     * i=3 i+1%3 == 0, toggle
     * 
     * 
     * 
     * 
     * 
     * i =2;
     */


    if(n==1 || n== 0){
        return n;
    }
    
    if(n==2){
        return 1;
    }


    let dp = new Array(n).fill(1);

    for(let i=0; i< n; i++){
        if((i+1)%2== 0){
            dp[i] = 0;
        }
    }


    for(let j = 3; j<=n-1; j++){

        for(let i=0; i<n; i++){


            if((i+1) % j == 0 ){
                dp[i] = dp[i]== 0? 1: 0;
            }
        }
    }

    dp[n-1] = dp[n-1] == 0 ? 1: 0;

    let counter = 0;

    for(let i=0; i<n; i++){

        if(dp[i]){
            counter++
        }
      
    }

   return counter;
};