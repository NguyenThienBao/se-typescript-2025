"use strict";
class Circle {
    _name = 'no-name';
    constructor(name) {
        if (name !== undefined)
            this._name = name;
    }
    draw(size) {
        console.log(`Circle is drawing with the name ${this._name} and size ${size}`);
    }
}
let cir = new Circle('The Ring');
cir.draw(100);
let cir_2 = new Circle("the RIng 2");
cir_2.draw(200);
cir = cir_2;
console.log(cir);
//# sourceMappingURL=lab06.oop.heritage.js.map