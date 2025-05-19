/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    let mid = findMid(mountainArr);


    if(mountainArr.get(mid) == target){
        return mid
    }


    let leftMostOccurence = findOccurence(target, mountainArr, 0, mid-1);
    console.log(leftMostOccurence)

    if(leftMostOccurence != -1 && mountainArr.get(leftMostOccurence) == target){
        return leftMostOccurence;
    }
    let rightMostOccurence = findRightOccurence(target, mountainArr, mid+1, mountainArr.length()-1);

    if(mountainArr.get(rightMostOccurence) == target){
        return rightMostOccurence;
    }

    return -1
};


var findMid = function(arr){
    let left = 0, right = arr.length()-1


    while(left < right){

        let mid = Math.floor((left+right)/2)
        if(arr.get(mid)> arr.get(mid+1)){
            right = mid;
        } else {
            left = mid+1;
        }
    }
    return left;
}

var findRightOccurence =function(target, arr, left, right){

    while(left <= right){

        let mid = Math.floor((left+right)/2)
        if(arr.get(mid) == target){
            return mid
        }

        if(arr.get(mid) > target){
            left = mid+1;
        } else {
            right = mid-1;
        }
    }

    return -1;
}

var findOccurence = function(target, arr, left, right){

    console.log(target, arr)

    while(left <= right){

        let mid = Math.floor((left+right)/2)
        if(arr.get(mid) == target){
            return mid;
        }
        
        
        if(arr.get(mid) > target){
            right = mid-1;
        } else {
            left = mid+1;
        }
    }


    return -1;
}

console.log(findInMountainArray(3, [1,2,3,4,5,3,1]))