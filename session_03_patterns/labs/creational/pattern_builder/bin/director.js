"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Director = void 0;
class Director {
    builder;
    setBuilder(builder) {
        this.builder = builder;
    }
    buildMinimalViableProduct() {
        this.builder.producePartA();
    }
    buildFullFeaturedProduct() {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}
exports.Director = Director;
//# sourceMappingURL=director.js.map