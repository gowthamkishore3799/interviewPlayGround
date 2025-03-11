// var myAtoi = function(s) {
//     let number = null;
//     let isNegativeNumber = false;
//     for(let i=0; i<s.length;i++){

//         if(s.charCodeAt(i) == 32 && number == null){
//             continue;
//         } else if(s.charCodeAt(i) == 45 && number == null){
//             isNegativeNumber = true;
//         } else if(s.charCodeAt(i) == 42 && number ==null){
//             continue
//         } else if(s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57){
//             number = ((number || 0) * 10 ) + parseInt(s[i])
//         } else{
//             break;
//         }
//     }

//     if(number !=null){
//         number = isNegativeNumber ? number * -1 : number
//     } else {
//         number = 0
//     }


//     return number;
// };

var myAtoi = function(s) {
    let number = parseInt(s);

    if(isNaN(number)) return 0;


    if(Math.abs(number) >= Math.pow(2,31)){
         number = number <=0 ? 0-Math.pow(2,31) : Math.pow(2,31)-1
    }

    return number
};

console.log(myAtoi("  -42"))