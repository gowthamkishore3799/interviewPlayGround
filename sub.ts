interface IObserver{
    notify(event: string, message: string): void;
    subscribe(event:string, subscriber:IChannel): void;
}

interface IChannel{
    receive(message: string): void;
}


class Observer implements IObserver{
    private subscribers = new Map<string, IChannel>();

    subscribe(event: string, subscriber: IChannel){
        this.subscribers.set(event, subscriber);
    }

    notify(event: string, data: string): void {
        const subs = this.subscribers.get(event);
        if (subs) {
          subs.receive(data);
        }
    }
}

class Whatsapp implements IChannel{


    public receive(message: string){
        console.log(message, "Received")
    }
}


const obs = new Observer();
obs.subscribe("whatsapp", new Whatsapp());

obs.notify("whatsapp", "Hey whatsapp user");

