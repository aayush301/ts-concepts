// Utility types - Built-in helper types that help with some common type manipulation.
// Partial - Changes all properties in an object to be optional
type obType1 = { x: number; y: number };
let p1: Partial<obType1> = { x: 10 };

// Required - Changes all properties in an object to be required
type obType2 = { x: number; y?: number };
let p2: Required<obType2> = { x: 10, y: 20 };

// Record - Equivalent to {[key:string]:number}
const p3: Record<string, number> = { one: 1, two: 2, three: 3 };

// Omit - Removes keys from an object type
type obType4 = { x: number; y: number; z: number; w: number };
const p4: Omit<obType4, "z" | "w"> = { x: 10, y: 20 };

// Pick - removes all but the specified keys from an object type
type obType5 = { x: number; y: number; z: number };
const p5: Pick<obType5, "x" | "y"> = { x: 10, y: 20 };

// Exclude - removes types from a union
type t = string | number | boolean | Date;
const value: Exclude<t, string | number> = true;

// ReturnType - extracts the return type of a function type
type FuncType1 = (x: string) => { a: number; b: number };
const q1: ReturnType<FuncType1> = { a: 10, b: 20 };

// Parameters - extracts the parameter types of a function type as an array
type FuncType2 = (x: string, y: { a: number; b: number }) => void;
const q2: Parameters<FuncType2>[1] = { a: 10, b: 20 };
