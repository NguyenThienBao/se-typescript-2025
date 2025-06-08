"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adapter = void 0;
const Target_1 = require("./Target");
class Adapter extends Target_1.Target {
    adaptee;
    constructor(adaptee) {
        super();
        this.adaptee = adaptee;
    }
    request() {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}
exports.Adapter = Adapter;
//# sourceMappingURL=Adapter.js.map