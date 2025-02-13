


function zero(number){


    let j = number.length-1;
    let i = j




    while(i>=0){


        if(number[i] == 0){
            i--;
        } else{
            number[j] = number[i];
            j--
            i--
        }
    }


    while(j>=0){
        number[j] =0;
        j--
    }

    return number;
}




console.log(zero([1, 0, 2, 3, 0, 4, 5]))