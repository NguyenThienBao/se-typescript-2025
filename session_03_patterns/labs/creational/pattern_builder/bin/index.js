"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const director_1 = require("./director");
const concreteBuilder1_1 = require("./concreteBuilder1");
function clientCode(director) {
    const builder = new concreteBuilder1_1.ConcreteBuilder1();
    director.setBuilder(builder);
    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();
    console.log('Standard full featured product:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();
    console.log('Custom product:');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}
const director = new director_1.Director();
clientCode(director);
//# sourceMappingURL=index.js.map