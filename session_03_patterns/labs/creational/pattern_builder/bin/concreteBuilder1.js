"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteBuilder1 = void 0;
const product1_1 = require("./product1");
class ConcreteBuilder1 {
    product = new product1_1.Product1;
    constructor() {
        this.reset();
    }
    reset() {
        this.product = new product1_1.Product1();
    }
    producePartA() {
        this.product.parts.push('PartA1');
    }
    producePartB() {
        this.product.parts.push('PartB1');
    }
    producePartC() {
        this.product.parts.push('PartC1');
    }
    getProduct() {
        const result = this.product;
        this.reset();
        return result;
    }
}
exports.ConcreteBuilder1 = ConcreteBuilder1;
//# sourceMappingURL=concreteBuilder1.js.map