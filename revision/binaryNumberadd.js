var addBinary = function(a, b) {
    let carry = 0, sum = "";



    let i =a.length-1, j = b.length-1


    while(i>=0 || j>=0 || carry == 1){
        let aInt = parseInt(a[i]) || 0
        let bInt = parseInt(b[j]) || 0


        sum = String(Math.floor((aInt + bInt + carry)%2) ) + sum;

        
        carry = Math.floor((aInt+bInt+ carry)/2)

        i--;
        j--
    }


    console.log(sum)



};

addBinary("11", "1")

// 0000