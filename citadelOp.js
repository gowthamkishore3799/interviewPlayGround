/**
 * 
 * 
 * Write a producer class, which takes messages and sends them to a pre-defined network endpoint. Contraints:

The class should have some caching in place, that it should not try to send message as it gets them.
The class will be instantiated from a single process. The instance may be shared across multiple processes.
The constructor should take 2 arguments
First argument should be the max count of messages. At any instant producer cannot hold more messages that this count.
Second argument should be the "max time allowed for each message to be held". At any instant, the producer cannot hold any message to time more than this argument.
The class should expose a public "SendMessage" API which takes a string as a message, and sends it.
 * 
 * 
 * 
 * Below assumptions are made here
 * For every minute, we are gonna process 10 message, along with message exceeding time limit
 * Also we have a hardlimit of sending only 10 messages for every minute
 * Also we can use bull queue, if needed later phase.
 * or also kubernets cron job 
 * 
 * 
 * 
 * 
 */


class Publisher {
    maxTimeFrame;
    maxMessagesLimit;
    queue = [];

    constructor(timeFrame = 60000, maxMessage= 5){
        this.maxTimeFrame = timeFrame;
        this.maxMessagesLimit = maxMessage;
        this.queue = []
        this.timer = null;
        this.messageProcessingLimit = 10;
    }


    SendMessageApi(message){
        if(this.queue.length > this.maxMessages) {
            return;
        }


        this.queue.push({
            message: message,
            time: Date.now()
        })

        if(!this.timer){
            this.timer = setInterval(()=>{
                this.ProcessMessage();
            }, 6000);
        }
    }


    ProcessMessage(){

        if(!this.queue){
            clearInterval()
        }


        let messages = this.queue.splice(0,10);

        const updatedMessage = this.queue.filter(({ time })=>{
            return Date.now() - time > this.maxTimeFrame
        })

        message = [...messages, ...updatedMessage]
        this.sendMessage(messages);

        if(!this.queue){
            clearInterval();
        }
    }



    sendMessage(messages){
        return new Promise((resolve)=>{
            //Message Processing endpoint.
        })
    }



}




const publisher = new Publisher(10000, 10);

publisher.SendMessageApi("message1")

publisher.SendMessageApi("message2");

publisher.SendMessageApi("Message 3")