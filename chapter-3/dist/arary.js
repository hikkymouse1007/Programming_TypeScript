// let a = [1, 2, 3]
// var b = ['a', 'b']
// let c: string[] = ['a']
// let d = [1, 'a']
// const e = [2, 'b']
// let f = ['red']
// f.push('blue')
// f.push(true)
// let g = []
// g.push(1)
// g.push(true)
// let h: number[] = []
// h.push(1)
// h.push('red')
// let d = [1, 'a']
// d.map(_ => {
// 	if (typeof _ === 'number') {
// 		return _ * 3
// 	}
// 	return _.toUpperCase()
// })
function buildArray() {
    var a = [];
    a.push(1);
    a.push('x');
    return a;
}
var myArray = buildArray();
myArray.push(true);
