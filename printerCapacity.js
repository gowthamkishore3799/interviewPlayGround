
/**
 * Logic
 * 
 * 1. Sort the array based on threshold and noofPages
 * 
 * 
 * then sum it accordingly..
 * 
 * 
 * @param {*} printer 
 * @param {*} threshold 
 */

function findPrinterCapacity(printer, threshold){

    let noOfPrinters = 0;

    let printerLimits = threshold.map((element, index)=> [element, printer[index]])

    let printingPages = [];

    printerLimits.sort((a,b)=> {

        if(a[0] < b[0]){
            return -1;
        }


        if(a[0] == b[0]){
            if(a[1]< b[1]){
                return 1
            } else{
                return -1;
            }
        }

        return 1;
    })

    /**
     * First befoe puhsing check if the limits are greater
     * 
     * !printpgaes.length < th
     *  continue
     * 
     * printPages.limit < currentlement remove it
     *      */
    

    let totalNofPages = 0;

    //[ [ 2, 5 ], [ 3, 4 ], [ 3, 3 ], [ 3, 2 ], [ 3, 1 ] ]
    for(let i=0; i< printerLimits.length; i++){

        let [thLimit, pgCapacity] = printerLimits[i];

        console.log(printingPages, thLimit)


        if(printingPages.length > 0 && printingPages.length >= thLimit){
            continue;
        }

        

        printingPages.push(thLimit);///3 3 3

        totalNofPages+= pgCapacity;//5 9 12 15
        console.log("inside", printingPages)


        let j =0;

        while(j<printingPages.length && printingPages[j] < thLimit){
            j++;
        }

        printingPages.splice(0, j);

    }
    return totalNofPages
}

const result = findPrinterCapacity([4, 1, 5, 2, 3], [3, 3, 2, 3, 3])
console.log(result)