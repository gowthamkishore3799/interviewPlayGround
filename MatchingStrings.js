function matchingStrings(strings, queries) {
    // Write your code here
    
    
    const hashMap = {};
    
    for(let str of strings){
       hashMap[str] = (hashMap[str] ?? 0) +1;
    }
    const results = new Array({length: strings.length})
    
    
    for(let i=0; i< queries.length; i++){
        results[i] = hashMap[queries[i]] ?? 0
    }

    return results;

}


console.log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']))
