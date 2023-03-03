// Array
let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: any[] = [1, true, "hello"];
let arr3: number[][] = [[1, 2, 3, 4, 5], [6], [7, 8, 9]];
let arr4: number[] | string[] = ["s1", "s2"];
let arr5: (number | string)[] = [11, 12, 13];
let arr6: readonly boolean[] = [true, false];

// Tuple: Arrays with pre-defined length and types for each index.
let tup1: [number, string, boolean] = [1, "hello", true];
let tup2: [number, string, boolean, ...any[]] = [1, "hello", true, "world", false];
let tup3: [number, string, boolean, ...number[]] = [1, "hello", true, 5, 10, 15];
tup1.push(10); // [1, "hello", true, 10]
let tup4: readonly [string, number] = ["e", 1];
let tup5: [x: number, y: boolean] = [10, false]; // Named tuple

// Array of tuples
let tupArr: [number, string][] = [
  [1, "hello1"],
  [2, "hello2"],
];
