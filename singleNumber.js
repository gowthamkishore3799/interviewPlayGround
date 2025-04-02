var singleNumber = function(arr){

    let one = 0
    let two = 0;
    for(let num of arr){


        one = one ^ num & ~two
        two = two ^ num & ~one
    }

    return one
}


console.log(singleNumber([1,1,1,2]))

