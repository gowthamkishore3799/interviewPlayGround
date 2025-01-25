/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
    let result = [];
    let isMultiLineComment = false;
    let currentLine = "";

    for (let code of source) {
        let i = 0;
        while (i < code.length) {
            if (!isMultiLineComment) {
                // Check for start of a multi-line comment
                if (code[i] === '/' && i + 1 < code.length && code[i + 1] === '*') {
                    isMultiLineComment = true;
                    i += 2; // Skip `/*`
                }
                // Check for single-line comment
                else if (code[i] === '/' && i + 1 < code.length && code[i + 1] === '/') {
                    break; // Ignore everything after `//`
                } else {
                    currentLine += code[i];
                    i++;
                }
            } else {
                // Check for end of a multi-line comment
                if (code[i] === '*' && i + 1 < code.length && code[i + 1] === '/') {
                    isMultiLineComment = false;
                    i += 2; // Skip `*/`
                } else {
                    i++; // Skip characters within the multi-line comment
                }
            }
        }

        // Add the current line to the result if we're not inside a multi-line comment
        if (!isMultiLineComment && currentLine.length > 0) {
            result.push(currentLine);
            currentLine = ""; // Reset for the next line
        }
    }

    return result;
};


