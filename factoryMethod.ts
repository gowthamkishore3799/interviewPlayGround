// Common product interface
interface Database {
   static connect(): void;
    // You can add more methods here, like query(), disconnect(), etc.
}

// Concrete products
class MongoDB implements Database {
    public static connect() {
        console.log("Connected to MongoDB");
    }
}

class PostgresDB implements Database {
    static connect() {
        console.log("Connected to Postgres");
    }
}

// Creator abstract class with the factory method
abstract class DBConnector {
    // This is the abstract factory method. Subclasses must implement it.
    abstract createConnection(): Database;

    // This method uses the factory method. It's the client-facing logic.
    connectToDB() {
        const db = this.createConnection(); // The factory method is called here.
        db.connect();
    }
}

// Concrete creators for each product type
class MongoConnector extends DBConnector {
    // This is the implementation of the factory method for MongoDB.
    createConnection(): Database {
        
    }
}

class PostgresConnector extends DBConnector {
    // This is the implementation of the factory method for Postgres.
    createConnection(): Database {
        return new PostgresDB();
    }
}

/**
 * Client code that uses the factory pattern to connect to the database.
 * The client is decoupled from the concrete product classes.
 */

class DBConnectionFactory{


    public static instance: DBConnectionFactory;



    public static getInstance(){
        if(!DBConnectionFactory.instance){
            return new DBConnectionFactory()
        }
        return DBConnectionFactory.instance;
    }

    public connect(){
        if(env == "SANDBOX"){
            return new PostgresConnector()
        }else{
            return new MongoConnector();
        }
    }
}
function runApplication() {
    let env = process.env.ENV; // Simulate getting the environment variable
    

    // The client code only calls this method.
    // It doesn't know or care whether it's connecting to Mongo or Postgres.
    DBConnectionFactory.getInstance();

    DBConnectionFactory.connect();
}

// Example usage
runApplication();