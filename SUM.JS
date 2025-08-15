function findColors(arr, size, threshold){

    arr.sort((a, b)=> a-b);
    let counter = 0;

    for(let i=0; i<=arr.length-size; i++){
        let min = arr[i];
        let max = arr[i+size];


        if(max-min < threshold){
            counter++
        }
    }

    return counter;
}

const arr = [10, 15, 9, 10, 9, 1, 3, 3];

const result = findColors(arr, 4, 2);

