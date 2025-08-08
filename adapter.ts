interface PaymentProcessor{
    pay(): void;
}


interface PaymentSystem{
    createPayment() : void;
}


class StripePayment implements PaymentSystem{


    createPayment(amount: number){
        console.log("Payment")
    }
}


class Paypaladapter implements PaymentSystem{
    createPayment(amount: number)
}


interface PayPalPaymentIF{
    transformRequest(): void;
}


class PaypalPayment implements PayPalPaymentIF{
    payMoney(): void {
        console.log("paying")
    }
}