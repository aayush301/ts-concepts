"use strict";
// Basic Types
let a1 = 5;
let a2 = "This is a string...";
let a3 = true;
let a4 = "Hello";
let a5 = 5;
// Type inference
let v1 = 10; // v1 = "wsd" will throw error
// Union of types (OR)
let strNum;
strNum = "Hello";
strNum = 10;
let answer = "yes";
// Declaration (Without initialization)
let age;
age = 10;
// Objects
const obj1 = { id: 1, name: "PQR" };
// Index signatures in objects - used for objects without a defined list of properties
const obj2 = {};
obj2.pqr = 10;
obj2.tlm = 30;
// Type assertion: Explicitly telling a compiler that we want to treat an entity as a different type
let pq = 10;
let pq1 = pq;
let pq2 = pq;
