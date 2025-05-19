// Defining KeyValue to map subscribers (can be any type of object)
export interface KeyValue {
    [key: string]: any; // Changed to "any" to support any type of subscriber
}


export interface ResponderClass{
    publish(message:string): string
}
class Publisher {
    pub: KeyValue;

    constructor() {
        this.pub = {};
    }

    public addSub(subName: string, instance: ResponderClass): void {
        this.pub[subName] = instance;
    }

    public response(sub: string, message: string): string {
        if (this.pub[sub] && typeof this.pub[sub].publish === "function") {
            return this.pub[sub].publish(message);
        } else {
            return "Subscriber not found or does not support publish method.";
        }
    }
}

// Whatsapp Class (Subscriber)
class Whatsapp implements ResponderClass {
    public publish(message: string): string {
        return `Whatsapp Responding: ${message}`;
    }
}

function addResponde() {
    let pub = new Publisher();
    let whatsapp = new Whatsapp();
    pub.addSub("whatsapp", whatsapp);

    console.log(pub.response("whatsapp", "Hello World")); // Output: Whatsapp Responding: Hello World
}

addResponde();
