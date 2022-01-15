// type Filter = {
//   (array: number[], f: (item: number) => boolean): number[]
//   (array: string[], f: (item: string) => boolean): string[]
//   (array: object[], f: (item: object) => boolean): object[]
// }
var filter = function (array, f) {
    var result = [];
    console.log(f);
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        console.log(item);
        console.log(f(item));
        if (f(item)) {
            result.push(item);
        }
    }
    return result;
};
var names = [
    { firstName: 'beth' },
    { firstName: 'caithlyn' },
    { firstName: 'xin' }
];
var result = filter(names, function (_) { return _.firstName.startsWith('b'); });
console.log(result);
//引数と戻り値の型が異なる場合には、ジェネリクスを追加で宣言する(ここでは"U")
function map(array, f) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result[i] = f(array[i]);
        console.log("result[".concat(i, "] = f(array[").concat(i, "])"));
    }
    console.log("result: ".concat(result));
    return result;
}
function isSmallA(_) {
    console.log("".concat(_, " => ").concat(_, " === 'a',"));
    return _ === 'a';
}
map(['a', 'b', 'c'], isSmallA);
// メモ: p75について
// _ => _ === 'a' は、
// function f(_) {
//   _ === 'a'
// }
// と同じ
// map(
//   ['a', 'b', 'c'],
//   _ => _ === 'a',
// )
// 要するに上は以下の式になる elm: 配列の要素が入る想定
map(['a', 'b', 'c'], function (elm) { return elm === 'a'; });
map(['a', 'b', 'c'], function (_) { return _ === 'a'; });
