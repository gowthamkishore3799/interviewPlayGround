interface IPayment {
    pay(): void;
}

class Payment implements IPayment {
    pay() {
        console.log("Processing payment...");
    }
}

// The abstract base class for all decorators.
// It implements the same interface as the object it decorates.
// It holds a reference to the wrapped object and delegates the call.
abstract class PaymentDecorator implements IPayment {
    protected payment: IPayment;

    constructor(payment: IPayment) {
        this.payment = payment;
    }

    // Default delegation.
    pay(): void {
        this.payment.pay();
    }
}

// A concrete decorator that adds new behavior (rate limiting)
// before the original method is called.
class RateLimiterDecorator extends PaymentDecorator {
    pay(): void {
        console.log("Rate limiting check passed.");
        // Call the parent's pay method, which delegates to the wrapped object.
        super.pay();
    }
}

// A concrete decorator that adds another behavior (e.g., logging).
class LoggingDecorator extends PaymentDecorator {
    pay(): void {
        console.log("Logging payment request...");
        super.pay();
        console.log("Logging payment response.");
    }
}

// Usage:
// Create the base object.
const simplePayment = new Payment();

// Decorate it with a RateLimiter.
const rateLimitedPayment = new RateLimiterDecorator(simplePayment);

// Decorate the rate-limited payment with a logger.
const fullPayment = new LoggingDecorator(rateLimitedPayment);

console.log("Executing simple payment:");
simplePayment.pay();

console.log("\nExecuting rate-limited payment:");
rateLimitedPayment.pay();

console.log("\nExecuting full payment (rate-limited and logged):");
fullPayment.pay();