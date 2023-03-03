// keyof - extracts the key type from an object type

// keyof with explicit keys
type ob1Type = { name: string; age: number };
let prop: keyof ob1Type;
prop = "name";
// prop="xyz" will throw error

// keyof with index signatures
type ob2Type = { [key: string]: number };
let prop2: keyof ob2Type;
prop2 = 0;
prop2 = "wsd";
// prop2 = false will throw error
