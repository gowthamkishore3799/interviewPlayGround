
function encode(strs) {
    return Buffer.from(strs.join(" ")).toString("base64")
}

/**
 * @param {string} str
 * @returns {string[]}
 */
function decode(str) {
    return Buffer.from(str, "base64").toString("utf-8").split(" ")
}


console.log(decode(encode(["neet", "code"])))