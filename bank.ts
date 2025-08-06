

 class BankManagement{
    private balances;
    private noOfUsers;
    private pendingCashbacks;
    
    
    constructor(balances: number[], noOfUsers: number){
        this.balances = balances
        this.noOfUsers = noOfUsers
        this.pendingCashbacks = new Map();
    }
    
    
    private updateCashbacks(accNumber: number, amount: number, requestTime: number){
        
        const cashbacks = this.pendingCashbacks.get(accNumber) || [];
        
        cashbacks.push({
            date: requestTime + 86400000,  //24 hrs
            amount: Math.floor(amount * 0.02),
        })
        this.pendingCashbacks.set(accNumber, cashbacks);
    }
    
    
    private processCashbacks(accNumber: number, requestTime: number){
        
        const cashbacks = this.pendingCashbacks.get(accNumber) || [];
        
        if(cashbacks.length <= 0){
            return;
        }
        
        let notDue = []
        
        console.log(cashbacks)
        for(let cashback of cashbacks){
            if(cashback.date > requestTime){
               notDue.push(cashback)
            } else{
                this.balances[accNumber-1] = this.balances[accNumber-1] + cashback.amount;
            }
            
        }
    
        this.pendingCashbacks.set(accNumber, notDue);
    }
    
    
    public processRequests(requests: string[]): number[]{
        
        for(let i = 0; i<requests.length; i++){
            let [typeOfOperation, date, accNumber, amount] = requests[i].split(" ");
            
            let requestaccNumber = Number.parseInt(accNumber);
            let requestAmount = parseInt(amount)
            let requestDate = parseInt(date) * 1000;
            
            if(requestaccNumber > this.noOfUsers){
                return [(i+1) * -1]
            }
            
            this.processCashbacks(requestaccNumber, requestDate)
            
            switch(typeOfOperation){
                case "deposit":
                    this.balances[requestaccNumber-1] = this.balances[requestaccNumber-1] + requestAmount;
                    break;
                
                case "withdraw":
                    console.log(this.balances[requestaccNumber-1], requestAmount, "Processing withdraw")
                    if(this.balances[requestaccNumber-1] < requestAmount){
                        return [(i+1) * -1]
                    }
                    
                    this.balances[requestaccNumber-1] = this.balances[requestaccNumber-1] - requestAmount;
                    this.updateCashbacks(requestaccNumber, requestAmount, requestDate)
                    break;
                default:
                   console.log("Invalid Operation");
            }
        }
        
        return this.balances;
    }
    
    
}

function solution(balances: number[], requests: string[]): number[] {
    const bank = new BankManagement(balances, balances.length)
    const processedState = bank.processRequests(requests);
    return processedState;
}


console.log(solution([748, 1366, 929, 1746],  [
    "withdraw 1612327459 3 229",
    "deposit 1612418002 4 251",
    "withdraw 1612513127 1 715",
    "deposit 1612655132 1 231",
    "deposit 1612804268 2 1011",
    "deposit 1612859919 2 647",
    "withdraw 1612978865 2 2741",
    "withdraw 1613050157 2 41",
    "deposit 1613100853 1 83",
    "withdraw 1613204686 4 812"
  ] ))