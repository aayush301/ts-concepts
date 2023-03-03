// Functions
function fun1(x: number, y: number = 10): number {
  return x + y;
}
function fun2(msg: string | number): void {
  console.log(msg);
}
const fun3 = (x: number, y: number = 5): number => {
  return x + y;
};
const fun4: (x: number, y: number) => number = (x, y = 5) => {
  return x + y;
};
const fun5: { (x: number, y: number): number } = (x, y = 5) => {
  return x + y;
};
const fun6 = (x: number, ...rest: number[]) => rest.length;
