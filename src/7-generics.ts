// Generics: Used to build usable Components by using placeholders for data types
// Generic functions
function getArray<T>(items: T[]): T[] {
  return items;
}
let arr = getArray<number>([1, 2, 3, 4]); // Now, arr.push("xyz") will throw error

const getItem = <T>(items: T[]): T => {
  return items[2];
};

// Generic classes
// ...

// Generic Types
type uType<T = number> = { id: T; name: string };
const k1: uType = { id: 10, name: "Tester1" };
const k2: uType<string> = { id: "12345678", name: "Tester2" };

type funType = <T>(items: T[]) => T;
const f11: funType = items => {
  return items[1];
};

// Extends in generics - Used for applying constraint
const func = <T extends string | number>(val: T): T => val;
func("Hello world!");
func(5);
