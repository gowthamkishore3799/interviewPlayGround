var rotatedDigits = function(n) {
    /**
     * for loop thorugh n
     * 
     * 
     * and then for each number reverse and see its it not included in 0,1 and the reverse is different number
     * 
     * 
     * o(n^2)
     */



    let counter = 0;
    let rotatingNumber = [2,5,6,9]
    let rotateNumberMapping = {
        2:5,
        5:2,
        6:9,
        9:6
    }
    for(let i=0; i<=n;i++){
        let num = i;
        let newNum = 0;


        while(num>0){
            let remainder = num%10;


            if(!rotatingNumber.includes(remainder)){ 
                newNum = 0;
                break;
            };
            newNum = (newNum*10) + rotateNumberMapping[remainder];
            num = Math.floor(num / 10)
        }

        if(num != newNum && newNum !=0){
            counter++;
        }
    }


    return counter;


    /**
     * Other thing is reverse it
     * 
     * 
     * One logic is 2,5,6,9
     * 
     * for 1, nothing
     * for 2, 25,26,29
     * for 3, nothing
     * for 4, nothing
     * 
     * 
     * for 100, nothing
     * 
     * for 200
     * 225
     * 226
     * 229
     * 
     * 256
     * 255
     * 
     */
};


console.log(rotatedDigits(30))