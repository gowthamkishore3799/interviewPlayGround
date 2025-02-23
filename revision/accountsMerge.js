function createGraph(accounts){

    let userAccounts = new Map();
    let profileDetails = new Map();
    for(let account of accounts) {
        for(let i=1;i<account.length;i++){


            profileDetails.set(account[1], account[0])


            let existingEmails = userAccounts.get(account[i])|| [];

            let newEmails = account.reduce((acc, value, index)=>{
                if(value != account[i] && index !=0){
                    acc.push(value)
                    console.log(value, 'Val')
                }
                return acc;
            },[])

            existingEmails.push(...newEmails);


            console.log(existingEmails, account[i], account)
            userAccounts.set(account[i], existingEmails)
        }
    }
    return [userAccounts, profileDetails]
}



function emailMerge(userAccounts, profileDetails){
    if(userAccounts.keys().length){
        return [];
    }

    let listOfMergedAccounts = []
    let alreadyMergedAccounts = {};



    var dfs = function(emailId, mergedAccounts, alreadyMergedAccounts){

        if(!emailId){
            return;
        }



        if(alreadyMergedAccounts[emailId]){
            return;
        }

        alreadyMergedAccounts[emailId] = true;
        mergedAccounts.push(emailId);
        

        const relatedAccounts = userAccounts.get(emailId) || [];


        for(let email of relatedAccounts){
            dfs(email, mergedAccounts, alreadyMergedAccounts);
        }

        return mergedAccounts;
    }

    for(let emailId of userAccounts.keys()){

        if(!alreadyMergedAccounts[emailId]){
            let newMergedAccounts = dfs(emailId, [], alreadyMergedAccounts);
            listOfMergedAccounts.push([profileDetails.get(emailId), ...newMergedAccounts.sort()]);

        }
        
    }

    return listOfMergedAccounts
}


var accountsMerge = function(accounts){

    let [userAccounts, profileDetails] = createGraph(accounts);

    console.log(userAccounts)
    let mergedAccounts = emailMerge(userAccounts, profileDetails);
    return mergedAccounts;
};


console.log(accountsMerge([["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]))