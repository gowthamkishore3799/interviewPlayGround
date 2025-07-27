var findSubstring = function(s, words) {
    const wordLen = words[0].length;
    const totalLen = wordLen * words.length;
    const n = s.length;
    const result = [];

    if (n < totalLen) return [];

    // Frequency map of words
    const wordCount = new Map();
    for (const w of words) {
        wordCount.set(w, (wordCount.get(w) || 0) + 1);
    }

    // Check each possible alignment
    for (let i = 0; i < wordLen; i++) {
        let left = i;
        let right = i;
        let seen = new Map();
        let count = 0;

        while (right + wordLen <= n) {
            const word = s.slice(right, right + wordLen);
            right += wordLen;

            if (wordCount.has(word)) {
                seen.set(word, (seen.get(word) || 0) + 1);
                count++;

                // If word frequency exceeds expected, move left pointer
                while (seen.get(word) > wordCount.get(word)) {
                    const leftWord = s.slice(left, left + wordLen);
                    seen.set(leftWord, seen.get(leftWord) - 1);
                    left += wordLen;
                    count--;
                }

                // If all words match
                if (count === words.length) {
                    result.push(left);
                }
            } else {
                // Reset if word not in dictionary
                seen.clear();
                count = 0;
                left = right;
            }
        }
    }
    return result;
};
