

/*
 * Complete the 'authEvents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts 2D_STRING_ARRAY events as parameter.
 */
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'authEvents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts 2D_STRING_ARRAY events as parameter.
 */

function authEvents(events) {
    const mod = 10 ** 9 + 7;
    const base = 131;
    let hashMap = new Map();

    // Correct left-to-right hash function
    const createHash = function(password) {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            hash = (hash * base + password.charCodeAt(i)) ;
        }
        hash = hash % mod
        hashMap.set(hash, true);
    };

    // Given a number attempt (already hashed) check if it is either an exact match
    // or a match with exactly one character appended.
    const verifyPassword = function(userPasswordHash) {
        if (hashMap.has(userPasswordHash)) {
            return 1;
        }
        // Check for each stored hash if appending one character (0-127) yields the attempted hash.
        for (let storedHash of hashMap.keys()) {
            for (let c = 0; c <= 127; c++) {
                const extendedHash = (storedHash * base + c) % mod;
                if (extendedHash === userPasswordHash) {
                    return 1;
                }
            }
        }
        return 0;
    };

    let eventResponse = [];
    for (let event of events) {
        const [type, eventData] = event;
        switch (type) {
            case "setPassword":
                createHash(eventData);
                break;
            default:
                // Convert eventData to a number if it's not a string
                let passwordAttemptHash = typeof eventData === 'string' ? 
                    (function() {
                        let h = 0;
                        for (let i = 0; i < eventData.length; i++) {
                            h = (h * base + eventData.charCodeAt(i)) % mod;
                        }
                        return h;
                    })() : eventData;
                let isValid = verifyPassword(passwordAttemptHash);
                eventResponse.push(isValid);
        }
    }
    return eventResponse;
}

// function main() {
//     // For testing purposes: use sample input.
//     // Example input:
//     // 2
//     // setPassword 000A
//     // authorize 108738449
//     let events = [
//         ["setPassword", "000A"],
//         ["authorize", 108738449]
//     ];
    
//     let result = authEvents(events);
//     console.log(result);
// }



console.log(authEvents([["setPassword", "000A"], [
"authorize", 108738449
]]))

