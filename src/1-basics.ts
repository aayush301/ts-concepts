// Basic Types
let a1: number = 5;
let a2: string = "This is a string...";
let a3: boolean = true;
let a4: any = "Hello";
let a5: 5 = 5;

// Type inference
let v1 = 10; // v1 = "wsd" will throw error

// Union of types (OR)
let strNum: string | number;
strNum = "Hello";
strNum = 10;
let answer: "yes" | "no" = "yes";

// Declaration (Without initialization)
let age: number;
age = 10;

// Objects
const obj1: { id: number; name: string; age?: number; readonly state?: string } = { id: 1, name: "PQR" };

// Index signatures in objects - used for objects without a defined list of properties
const obj2: { [index: string]: number } = {};
obj2.pqr = 10;
obj2.tlm = 30;

// Type assertion: Explicitly telling a compiler that we want to treat an entity as a different type
let pq: any = 10;
let pq1 = <number>pq;
let pq2 = pq as number;
