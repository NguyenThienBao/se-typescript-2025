"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prototype = void 0;
class Prototype {
    primitive;
    component;
    circularReference;
    clone() {
        const clone = Object.create(this);
        clone.component = Object.create(this.component);
        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };
        return clone;
    }
}
exports.Prototype = Prototype;
//# sourceMappingURL=prototype.js.map