var minEatingSpeed = function(piles, h) {
    function check(piles, h, mid) {
        let ans = 0;
        for (let pile of piles) {
            ans += Math.floor(pile / mid);
            if (pile % mid !== 0) {
                ans++;
            }
        }
        return ans <= h;
    }

    let low = 1;
    let high = Math.max(...piles);

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (check(piles, h, mid)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return low;
};

/**
 * firs5 sum all values
 * 
 * 
 * i=1 to max element
 * 1 to 30
 * 
 * 
 * 
 */
