var solution = function(isBadVersion) {
    return (n) => {
        let left = 1;
        let right = n;
        let answer = undefined;
        let pointer = Math.floor(n/2);

        while(true) {
            answer = isBadVersion(pointer);
            if(answer == false && isBadVersion(pointer + 1) == true) {
                return pointer + 1;
            }
            if(answer == true && isBadVersion(pointer - 1) == false) {
                return pointer;
            }

            else if(answer == false) {
                left = pointer;
                pointer = pointer + Math.floor((right + pointer) / 2);
            }

            else if(answer == true) {
                right = pointer;
                pointer = Math.floor((pointer + left) / 2);
            }
        }
    }
};
