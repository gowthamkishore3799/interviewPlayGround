function sockMerchant(n, ar) {
    // Write your code here

    let hashMap = {}, pair = 0;


    for(let sock of ar){
        if(!hashMap[sock]){
            hashMap[sock] = 1
        } else {
            hashMap[sock] = hashMap[sock]+1;
        }




        if(hashMap[sock]%2 == 0){
            pair++;
        } 
    }


    return pair;

}


console.log(sockMerchant(7, [10, 20, 20, 10, 10, 30, 50, 10, 20]))