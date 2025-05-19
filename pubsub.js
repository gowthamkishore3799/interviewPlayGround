"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Publisher = /** @class */ (function () {
    function Publisher() {
        this.pub = {};
    }
    Publisher.prototype.addSub = function (subName, instance) {
        this.pub[subName] = instance;
    };
    Publisher.prototype.response = function (sub, message) {
        if (this.pub[sub] && typeof this.pub[sub].publish === "function") {
            return this.pub[sub].publish(message);
        }
        else {
            return "Subscriber not found or does not support publish method.";
        }
    };
    return Publisher;
}());
// Whatsapp Class (Subscriber)
var Whatsapp = /** @class */ (function () {
    function Whatsapp() {
    }
    Whatsapp.prototype.publish = function (message) {
        return "Whatsapp Responding: ".concat(message);
    };
    return Whatsapp;
}());
function addResponde() {
    var pub = new Publisher();
    var whatsapp = new Whatsapp();
    pub.addSub("whatsapp", whatsapp);
    console.log(pub.response("whatsapp", "Hello World")); // Output: Whatsapp Responding: Hello World
}
addResponde();
