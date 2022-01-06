// function add(a: number, b: number) :number {
//   return a + b
// }
// function greet(name: string) {
//   return 'hello' + name
// }
// let greet2 = function(name: string) {
//   return 'hello' + name
// }
// let greet3 = (name: string) => {
//   return 'hello' + name
// }
// let greet4 = (name: string) =>
//   'hello' + name
// let greet5 = new Function('name', 'return "hello " + name')
// add(1, 2)
// greet('Crystal')
// // add(1)
// // add(1, 'a')
// function log(message: string, userId?: string) {
//   let time = new Date().toLocaleTimeString()
//   console.log(time, message, userId || 'Not signed in')
// }
// log('Page loaded')
// log('User signed in', 'da763be')
// function log2(message: string, userId = 'Not signed in') {
//   let time = new Date().toLocaleTimeString()
//   console.log(time, message, userId)
// }
// log2('User clicked on a button', 'da763be')
// log2('User signed out')
// type Context = {
//   appId?: string
//   userId?: string
// }
// function log3(message: string, context: Context = {}) {
//   let time = new Date().toISOString()
//   console.log(time, message, context.userId)
// }
// function sum(numbers: number[]): number {
//   return numbers.reduce((total, n) => total + n, 0)
// }
// console.log(sum([1, 2, 3]));
// function sumVariadic(): number {
//   return Array
//     .from(arguments)
//     .reduce((total, n) => total + n, 0)
// }
// // sumVariadic(1, 2, 3)
// function sumVariadicSafe(...numbers: number[]): number {
//   return numbers.reduce((total, n) => total + n, 0)
// }
// console.log(sumVariadicSafe(1, 2, 3))
// add(10, 20)
// add.apply(null, [10, 20])
// add.call(null, 10, 20)
// add.bind(10, 20)()
// let x = {
//   a() {
//     console.log(`this is ${this}`)
//     return this
//   }
// }
// x.a()
// let a = x.a
// a()
// function fancyDate(this: Date) {
//   console.log(`${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}`)
// }
// fancyDate.call(new Date)
// // fancyDate() // 型 'void' の 'this' コンテキストを型 'Date' のメソッドの 'this' に割り当てることはできません。
// function* createFibonacciGenerator() {
//   let a = 0
//   let b = 1
//   while (true) {
//     yield a;
//     [a, b] = [b, a+b]
//     console.log(a, b)
//   }
// }
// let fibonacciGenerator = createFibonacciGenerator()
// fibonacciGenerator.next()
// fibonacciGenerator.next()
// fibonacciGenerator.next()
// fibonacciGenerator.next()
// fibonacciGenerator.next()
// function* createNumbers(): Generator<number> {
//   let n = 0
//   let b = 1
//   while (1) {
//     yield n++;
//   }
// }
// let numbers = createNumbers()
// console.log(numbers.next())
// console.log(numbers.next())
// console.log(numbers.next())
// let numbers = {
//   *[Symbol.iterator]() {
//     for (let n = 1; n <= 10; n++) {
//       yield n
//     }
//   }
// }
function add(a, b) {
    return a + b;
}
function area(radius) {
    if (radius < 0) {
        return null;
    }
    return Math.PI * (Math.pow(radius, 2));
}
var r = 3;
var a = area(r);
if (a !== null) {
    console.info('result:', a);
}
var log = function (message, userId) {
    if (userId === void 0) { userId = 'Not signed in'; }
    var time = new Date().toISOString();
    console.log(time, message, userId);
};
function times(f, // 関数を引数として受ける
n) {
    for (var i = 0; i < n; i++) {
        f(i); // n回関数fを呼び出す
    }
}
times(function (n) { return console.log("I am callback f(".concat(n, ")")); }, 4);
function f(n) {
    console.log(n);
}
times(f, 4);
