function uniqueNumber(){
    let arr = [3,2,3]

    let result = 0
    for(let val of arr){
        result = result ^ val
    }

    return result
}

console.log(uniqueNumber([3,2,3]
))