class DatabaseConnect {
    static instance: DatabaseConnect;


    public static getIntance(){
        if(!this.instance){
            this.instance = new DatabaseConnect();
        }

        return this.instance
    }

    public connect(){
        return "1"
    }
}


const obj = DatabaseConnect.getIntance();

console.log(obj.connect())