class TimeMap {
    map
    constructor() {
       this.map = new Map<String, String>(); 
    }

    set(key: string, value: string, timestamp: number): void {
        

        const result = this.map.get(key) || [];


        result.push({
            value, timestamp
        })

        this.map.set(key, result);
    }

    get(key: string, timestamp: number): string {
        const result = this.map.get(key);

        if(!result){
            return ""
        }

        let i=0, j= result.length-1;


        while(i<=j){
            let mid = Math.floor((i+j)/2);
            if(result[mid].timestamp == timestamp){
                return result[mid].value;
            }



            if(result[mid].timestamp > timestamp){
                j = mid-1;
            } else{
                i=mid+1
            }
        }


        return result[i].value
    }
}
