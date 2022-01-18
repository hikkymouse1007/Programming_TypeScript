// function call(
//   f: (...args: unknown[]) => unknown,
//   ...args: unknown[]
// ): unknown {
//   console.log(`args: ${args}`)
//   console.log(`f(...args): ${f(...args)}`)
//   return f(...args)
// }
function call(f) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log("args: ".concat(args));
    console.log("f(...args): ".concat(f.apply(void 0, args)));
    return f.apply(void 0, args);
}
function fill(length, value) {
    console.log("length: ".concat(length, ", value: ").concat(value));
    console.log("Array.from({length}, () => value): ".concat(Array.from({ length: length }, function () { return value; })));
    return Array.from({ length: length }, function () { return value; }); // from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
}
function say(foo, bar, buzz) {
    return [foo, bar, buzz];
}
call(fill, 10, 'a'); // fillには2つの引数が必要なので、 fill(f) + 2で3つの引数をcallに渡す
// call(fill, 10, 'a', 'b') // fillには2つの引数が必要なので、 fill(f) + 3で4つの引数をcallに渡すとエラー(引数は3つ必要)
call(say, 'Hi', 'Ms', 'Jessica');
