// Interfaces
interface IMediator {
    register(event: string, handler: () => void): void;
    publish(event: string): void;
  }
  
  interface IPayment {
    publish(): void;
  }
  
  // Concrete message
  class PaymentSuccess {
    run() {
      console.log("Message success");
    }
  }
  
  // Mediator with a registry (no if/else chains)
  class Mediator implements IMediator {
    private registry = new Map<string, () => void>();
  
    register(event: string, handler: () => void): void {
      this.registry.set(event, handler);
    }
  
    publish(event: string): void {
      const handler = this.registry.get(event);
      if (handler) handler();
    }
  }
  
  // Publisher
  class Payments implements IPayment {
    constructor(private mediator: IMediator) {}
  
    publish(): void {
      this.mediator.publish("successful");
    }
  }
  
  // ---- wire it up ----
  const bus: IMediator = new Mediator();
  bus.register("successful", () => new PaymentSuccess().run());
  
  const payments = new Payments(bus);
  payments.publish(); // -> "Message success"
  