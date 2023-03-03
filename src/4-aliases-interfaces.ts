// Type Aliases - Allow types to be defined with a custom names. Allows types to be easily shared between variables.
type t1 = boolean | number;
let x1: t1 = false;

type t2 = t1 | string;
const x2: t2 = "This is string";

type UserType = { readonly id: number; name: string; age?: number };
const user1: UserType = { id: 1, name: "PQR" }; // user1.id = 10 will throw error

type UserType2 = UserType & { address: string };
const u2: UserType2 = { id: 3, name: "esdf", address: "addr" };

type AddFuncType = { (x: number, y: number): number };
const add1: AddFuncType = (x, y) => x + y;

type AddFuncType2 = (x: number, y: number) => number;
const add2: AddFuncType2 = (x, y) => x + y;

// Interfaces - Similar to type aliases
// Object interface
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
  f1?: () => number;
  f2?(): string;
}
const user2: UserInterface = { id: 1, name: "PQR", f1: () => 5, f2: () => "str" };
// user2.id = 10 will throw error

// Extending an interface
interface EmployeeInterface extends UserInterface {
  role: string;
  salary: number;
}
const employee: EmployeeInterface = { id: 10, name: "AB", age: 10, role: "admin", salary: 100 };

// function interface
interface FuncInterface {
  (x: number, y: number): number;
}
const add3: FuncInterface = (x, y) => x + y;

// Intermixing type aliases and interfaces
// Creating type aliases by extending interface
type EmployeeType = UserInterface & { salary: number };

// Creating interfaces by extending type aliases
interface I extends UserType {
  salary: number;
}
