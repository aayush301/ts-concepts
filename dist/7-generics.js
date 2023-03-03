"use strict";
// Generics: Used to build usable Components by using placeholders for data types
// Generic functions
function getArray(items) {
    return items;
}
let arr = getArray([1, 2, 3, 4]); // Now, arr.push("xyz") will throw error
const getItem = (items) => {
    return items[2];
};
const k1 = { id: 10, name: "Tester1" };
const k2 = { id: "12345678", name: "Tester2" };
const f11 = items => {
    return items[1];
};
// Extends in generics - Used for applying constraint
const func = (val) => val;
func("Hello world!");
func(5);
