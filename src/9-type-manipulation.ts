// keyof operator - extracts the key type from an object type
// operates on a type and returns a type
type Point = { x: number; y: number };
type P = keyof Point;
// Eq. to type P = "x" | "y"

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
// Eq. to type A = number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
// Eq. to type M = string | number;

// typeof operator
// operates on an identifier and returns a type
const hello = 'hello';
type t = typeof hello;
// Eq. to type t = string

const ob = { a: 10, b: false };
type pr = { [k in keyof typeof ob]: string };
// Eq. to type t2 = { a: string; b: string; }

type Obb = { a: number; b: boolean };
type kt = { [k in keyof Obb]: string };
// Eq. to type kt = { a: string; b: string; }

enum e {
  xt = 'x',
  yt = 'y',
}

type rt = keyof typeof e;
// Eq. to type rt = "xt" | "yt"

type tt = { [k in e]: string };
// Eq. to type tt = { x: string; y: string; }
// Eq. to type tt = Record<e, string>;

// Indexed access type
// Used to look up a specific property on another type
const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];

type Person = (typeof MyArray)[number];
// typeof MyArray[number] eq. to (typeof MyArray)[number]
// Eq. to type Person = {name: string; age: string;}
