var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) return "0";

    let result = "";

    // Handle sign
    if (Math.sign(numerator) !== Math.sign(denominator)) {
        result += "-";
    }

    // Convert to absolute values
    let num = Math.abs(numerator);
    let den = Math.abs(denominator);

    // Integer part
    let integerPart = Math.floor(num / den);
    result += integerPart;

    let remainder = num % den;
    if (remainder === 0) return result;

    result += ".";

    let map = new Map(); // To detect repeating remainders

    while (remainder !== 0) {
        if (map.has(remainder)) {
            let repeatIndex = map.get(remainder);
            result = result.slice(0, repeatIndex) + "(" + result.slice(repeatIndex) + ")";
            break;
        }

        map.set(remainder, result.length);
        remainder *= 10;
        result += Math.floor(remainder / den);
        remainder = remainder % den;
    }

    return result;
};
