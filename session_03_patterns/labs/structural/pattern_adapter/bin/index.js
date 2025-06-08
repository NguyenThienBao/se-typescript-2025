"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Target_1 = require("./Target");
const Adaptee_1 = require("./Adaptee");
const Adapter_1 = require("./Adapter");
function clientCode(target) {
    console.log(target.request());
}
console.log('Client: I can work just fine with the Target objects:');
const target = new Target_1.Target();
clientCode(target);
console.log('');
const adaptee = new Adaptee_1.Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.specificRequest()}`);
console.log('');
console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter_1.Adapter(adaptee);
clientCode(adapter);
//# sourceMappingURL=index.js.map