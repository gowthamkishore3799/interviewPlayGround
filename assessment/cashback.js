// function performCashBackOperation ({userId, timeStamp, userAccountDetails,balances}){
    

//     if(!userAccountDetails.has(userId)){
//         return;
//     }
    
    
//     let userAccountInformation = userAccountDetails.get(userId) || [];
    
    
//     let left = 0; right = userAccountInformation.length-1;
//     let currentTimeStamp = new Date(timeStamp*1000)

//     console.log(currentTimeStamp, "Timestamp")
    
//     while(left<right){
//         let mid = Math.floor((left+right)/2)
        
//         if(userAccountInformation[mid][0] >= currentTimeStamp){
//             right = mid
//         } else{
//             left = mid+1;
//         }
//     }
//     left = left-1;

    
//     let cashback = 0;
    
//     for(let i=0; i<=left; i++){
//         cashback += userAccountInformation[i][1]
//         userAccountInformation.shift();
//     }
//     userAccountDetails.set(userId, userAccountInformation.splice(left)) //Updating the cashback
//     console.log(cashback, "ADEDE...D", )
//     balances[userId-1] = balances[userId-1] + cashback 
// }

// function depositAmount({userId, amount, balances}){
//     let currentBalance = balances[userId-1];
//     balances[userId-1] = parseInt(currentBalance)+ parseInt(amount);
//     return true;
// }

// function withdrawAmount({userId, amount, timeStamp, balances, userAccountDetails}){
    
//     const currentBalance = balances[userId-1];
//     if(currentBalance < amount){
//         return false;
//     }
//     balances[userId-1] = currentBalance - amount; 
    
//     /**
//      * Cashback information
//      */
//     let userInformation = userAccountDetails.get(userId) || [];

//     const currentTimeStamp = timeStamp * 1000;
//     const updatedTime = new Date(currentTimeStamp + (24*60*60*1000));
//     const cashbackAmount = Math.floor(amount * 0.02)
//     userInformation.push([updatedTime, cashbackAmount])
//     userAccountDetails.set(userId, userInformation);
    
//     console.log(userInformation,userAccountDetails, userId, "Cashback updated")
//     return true;
// }


// /**
//  * Implement OOP for code clarity once implementation is done
//  * 
//  * 
//  */
// function solution(balances, requests) {
    
//     let noOfUsers = balances.length;
//     let userAccountDetails = new Map(); 
    
//     for(let i=0;i<requests.length; i++){
//         let [operation, timeStamp, userId, amount] = requests[i].split(" ");
//         amount = parseInt(amount)
        
//         if(userId>noOfUsers) return [i+1];
        
//         console.log(`${operation} executed for ${userId} for amount ${amount} Details: ${userAccountDetails.get(userId)}, ${JSON.stringify(userAccountDetails)}`)
        
//         performCashBackOperation({userId, timeStamp, userAccountDetails, balances})
//         let validOperation = true;
        
//         switch(operation){
//             case "deposit":
//                validOperation = depositAmount({userId, amount, balances});
//                break;
//             case "withdraw":
//                validOperation = withdrawAmount({userId, amount, timeStamp, balances, userAccountDetails});
//         }

//         console.log(userAccountDetails, "After updation")
    
//         if(!validOperation){
//             return [i+1];
//         }
//     }
//     console.log(balances, "Balances")
//     return balances
// }

function performCashBackOperation({ userId, timeStamp, userAccountDetails, balances }) {
    if (!userAccountDetails.has(userId)) return;

    let userAccountInformation = userAccountDetails.get(userId) || [];

    let currentTimeStamp = new Date(timeStamp * 1000);

    function condition(index) {
        return userAccountInformation[index][0] > currentTimeStamp;
    }

    let left = 0, right = userAccountInformation.length;
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (condition(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }


    let cashback = 0;
    for (let i = 0; i < left; i++) {
        cashback += userAccountInformation[i][1];
    }

    // Keep only future cashback entries
    userAccountDetails.set(userId, userAccountInformation.slice(left));
    balances[userId - 1] += cashback;

    
}

function depositAmount({ userId, amount, balances }) {
    balances[userId - 1] += parseInt(amount);
    return true;
}

function withdrawAmount({ userId, amount, timeStamp, balances, userAccountDetails }) {
    if (balances[userId - 1] < amount) return false;

    balances[userId - 1] -= amount;

    let userInformation = userAccountDetails.get(userId) || [];

    const unlockTimestamp = timeStamp + 24 * 60 * 60; // 24 hours in seconds
    const cashbackAmount = Math.floor(amount * 0.02);

    userInformation.push([new Date(unlockTimestamp * 1000), cashbackAmount]);
    userAccountDetails.set(userId, userInformation);

    return true;
}

function solution(balances, requests) {
    const noOfUsers = balances.length;
    const userAccountDetails = new Map();

    for (let i = 0; i < requests.length; i++) {
        let [operation, timeStampStr, userIdStr, amountStr] = requests[i].split(" ");
        const userId = parseInt(userIdStr);
        const timeStamp = parseInt(timeStampStr);
        const amount = parseInt(amountStr || "0");

        if (userId > noOfUsers) return [i + 1];

        performCashBackOperation({ userId, timeStamp, userAccountDetails, balances });

        let validOperation = true;
        if (operation === "deposit") {
            validOperation = depositAmount({ userId, amount, balances });
        } else if (operation === "withdraw") {
            validOperation = withdrawAmount({ userId, amount, timeStamp, balances, userAccountDetails });
        }

        if (!validOperation) return [i + 1];
    }

    return balances;
}


console.log(solution([1000, 1500],
    ["withdraw 1613327630 2 480", 
     "withdraw 1613327644 2 800", 
     "withdraw 1614105244 1 100", 
     "deposit 1614108844 2 200", 
     "withdraw 1614108845 2 150"
    ]))