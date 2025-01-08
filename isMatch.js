

    function isMatch(text, pattern) {

        const dp = Array(text.length + 1).fill(false).map(() => Array(pattern.length + 1).fill(false));
        console.log(dp)
        return matchHelper(text, 0, pattern, 0);
    }

    function matchHelper(text, tIdx, pattern, pIdx) {
        // If we reach the end of the pattern
        if (pIdx === pattern.length) {
            return tIdx === text.length;
        }

        // Check if the current character matches or if it's a '.'
        const isMatch =
            tIdx < text.length &&
            (text[tIdx] === pattern[pIdx] || pattern[pIdx] === ".");

        // Handle '*' in the pattern
        if (pIdx + 1 < pattern.length && pattern[pIdx + 1] === "*") {
            // Either skip the '*' and the preceding character (zero occurrences),
            // or consume one character in the text if there's a match
            return (
                matchHelper(text, tIdx, pattern, pIdx + 2) ||
                (isMatch && matchHelper(text, tIdx + 1, pattern, pIdx))
            );
        }

        // If no '*', proceed with the next character
        if (isMatch) {
            return matchHelper(text, tIdx + 1, pattern, pIdx + 1);
        }

        return false; // No match
    }


console.log(isMatch("aa", "a*"));



/**
 * 1. If same character 
 * 2. Character with *
 * 3. .
 * 4. . with *
 */