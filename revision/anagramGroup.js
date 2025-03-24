ar findAnagrams = function (s, p) {
    const ansArr = [];
    const hash = {};
    for(let i = 0; i < p.length; i++) {
        hash[p[i]] = (hash[p[i]] ?? 0) + 1;
    };

    let l = 0;
    let r = 0;
    console.log(hash)
    while(r < s.length) {
        if(hash[s[r]] > 0) {
            hash[s[r]]--;
            console.log(hash, 'Hash')
            if(r - l + 1 === p.length) ansArr.push(l);
            r++;
        } else {
            console.log(hash[s[l]], s[l], l,'Else')
            if(hash[s[l]] !== undefined) hash[s[l]]++;
            l++;
            if(l > r) r = l;
        }
    }

    return ansArr;
};



/**
 * Find anagarams
 * 
 * 
 * if i=0 to j = 3
 * 
 * 
 * splice(i, i+3).sort() == abc.sort()
 * 
 * push
 * 
 * 
 * 
 */