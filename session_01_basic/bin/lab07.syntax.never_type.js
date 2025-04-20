"use strict";
const show_error = (message) => {
    console.log('-- start show err');
    throw new Error(message);
    console.log('-- end show err');
};
const calculate = () => {
    try {
        console.log('-- start calculation');
        show_error('Something is failed');
        console.log('-- end calculation');
    }
    catch (e) {
        console.error(e);
    }
};
calculate();
//# sourceMappingURL=lab07.syntax.never_type.js.map