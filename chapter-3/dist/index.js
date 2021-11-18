// Type unknow
var a = 30; // unknow
var b = a === 123; // boolean
var c = a + 10; // エラー　TS2571: オブジェクトの型は 'unknown'
if (typeof a === 'number') {
    var d = a + 10;
}
