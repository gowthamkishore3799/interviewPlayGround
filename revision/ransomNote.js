var canConstruct = function(ransomNote, magazine) {
    for (let i = 0; i < ransomNote.length; i++) {
       if (!magazine.includes(ransomNote[i])) {
           return false
       }else {
           magazine = magazine.replace(ransomNote[i], "")
       }
    }
    return true
};