import fs from 'fs';

enum LOG_LEVEL {
    INFO = "info",
    DEBUG = "debug",
    ERROR = "error",
    LOG = "LOG",
}

/**
 * Append to disk storage as well append to console.logs
 */
abstract  class Logfactory{


    public abstract log(): void;
}

class FileLogger extends Logfactory{

    public log(){
        const stream = fs.WriteStream()
    }
}


class Logger{

    intialiseAppenders(){

    }

    log(logLevel: LOG_LEVEL, message: string){
        console.log(`${LOG_LEVEL} : ${JSON.stringify(message)}`);

    }

    debug(message: string){
        this.log(LOG_LEVEL.DEBUG, message)
    }
}