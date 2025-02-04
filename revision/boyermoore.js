function badCharTable(pattern) {
    const table = {};
    const length = pattern.length;

    for (let i = 0; i < length - 1; i++) {
        table[pattern[i]] = length - 1 - i;
    }

    return table;
}

function boyerMooreSearch(text, pattern) {
    const n = text.length;
    const m = pattern.length;

    if (m === 0) return 0;

    const badCharShift = badCharTable(pattern);
    let shift = 0; 

    while (shift <= n - m) {
        let j = m - 1;

        while (j >= 0 && pattern[j] === text[shift + j]) {
            j--;
        }

        if (j < 0) {
            return shift; 
        }

        const badChar = text[shift + j];
        shift += badCharShift[badChar] !== undefined ? Math.max(1, badCharShift[badChar]) : m;
    }

    return -1; 
}

const text = "ABAAABCD";
const pattern = "ABC";
console.log(boyerMooreSearch(text, pattern));

