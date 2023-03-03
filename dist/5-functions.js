"use strict";
// Functions
function fun1(x, y = 10) {
    return x + y;
}
function fun2(msg) {
    console.log(msg);
}
const fun3 = (x, y = 5) => {
    return x + y;
};
const fun4 = (x, y = 5) => {
    return x + y;
};
const fun5 = (x, y = 5) => {
    return x + y;
};
const fun6 = (x, ...rest) => rest.length;
