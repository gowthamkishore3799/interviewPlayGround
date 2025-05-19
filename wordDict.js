function spellchecker(wordlist, queries) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
    const exact = new Set(wordlist);
    const caseInsensitive = new Map();
    const vowelInsensitive = new Map();
    
    function devowel(word) {
        return word.toLowerCase().replace(/[aeiou]/g, '*');
    }
    
    for (let word of wordlist) {
        let lower = word.toLowerCase();
        if (!caseInsensitive.has(lower)) {
            caseInsensitive.set(lower, word);
        }
        let devoweled = devowel(word);
        if (!vowelInsensitive.has(devoweled)) {
            vowelInsensitive.set(devoweled, word);
        }
    }
    
    const result = [];
    for (let query of queries) {
        if (exact.has(query)) {
            result.push(query);
        } else if (caseInsensitive.has(query.toLowerCase())) {
            result.push(caseInsensitive.get(query.toLowerCase()));
        } else if (vowelInsensitive.has(devowel(query))) {
            result.push(vowelInsensitive.get(devowel(query)));
        } else {
            result.push("");
        }
    }
    
    return result;
}

/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
// var spellchecker = function(wordlist, queries) {
//     const asIs = new Set(wordlist);
//     const lowercased = createLowercasedList(wordlist);
//     const vowelCorrected = createVowelCorrectedList(wordlist);
    
//     return queries.map(query => {
//         if (asIs.has(query)) {
//            return query;
//         }
        
//         const lowercasedQuery = query.toLowerCase();
//         if (lowercased.has(lowercasedQuery)) {
//             return lowercased.get(lowercasedQuery);
//         }
        
//         const correctedQuery = toVowelCorrected(query);
//         if (vowelCorrected.has(correctedQuery)) {
//             return vowelCorrected.get(correctedQuery);
//         }
        
//         return '';
//     });
// };

// const createLowercasedList = (wordlist) => {
//     const map = new Map();
    
//     for (const word of wordlist) {
//         const lowercased = word.toLowerCase();
        
//         if (map.has(lowercased)) {
//             continue;
//         }
        
//         map.set(lowercased, word);
//     }
    
//     return map;
// }

// const createVowelCorrectedList = (wordlist) => {
//     const map = new Map();
    
//     for (const word of wordlist) {
//         const corrected = toVowelCorrected(word);
        
//         if (map.has(corrected)) {
//             continue;
//         }
        
//         map.set(corrected, word);
//     }
    
//     return map;
// }

// // hello => h*ll*
// const toVowelCorrected = word => word.toLowerCase().replace(/a|e|i|o|u/g, '*');




console.log(spellchecker(["KiTe","kite","hare","Hare"], ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"]))
// "Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"





