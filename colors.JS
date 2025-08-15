function findColors(arr, size, threshold){

    arr.sort((a, b)=> a-b);
    let counter = 0;

    console.log(arr)

    let i =0;
    while(i<=arr.length-size){
        let min = arr[i];
        let max = arr[i+size-1];

        console.log(min, max)


        

        if(max-min <= threshold){
            i=i+size;
            counter++
        } else{
            i++;
        }
    }

    console.log(counter, "Counter..")
    return counter;
}

// const arr = [6, 2,10,2,11,1,3,2];
const arr = [10, 15, 9, 10, 9, 1,3,3,]
const result = findColors(arr, 4, 2);

