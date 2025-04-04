interface Database{
    connect(): string
}

// abstract class Database{
//     public abstract connect(): string
// }


class Mongodb implements Database{
    public connect(): string{
        return "2"
    }
}