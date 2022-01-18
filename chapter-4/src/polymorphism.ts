// // type Filter = {
// //   (array: number[], f: (item: number) => boolean): number[]
// //   (array: string[], f: (item: string) => boolean): string[]
// //   (array: object[], f: (item: object) => boolean): object[]
// // }

// // function filter(array, f) {
// //   let result = []
// //   console.log(f)
// //   for (let i = 0; i < array.length; i++) {
// //     let item = array[i]
// //     console.log(item)
// //     console.log(f(item))
// //     if (f(item)) {
// //       result.push(item)
// //     }
// //   }
// //   return result
// // }

// // filter([1, 2, 3, 4], _ => _ < 3)

// // ジェネリック型パラメーター 引数に応じて、型を推測してくれる。
// type Filter = {
//   <T>(array: T[], f: (item: T) => boolean): T[]
// }

// let filter: Filter = (array, f) => {
//   let result = []
//   console.log(f)
//   for (let i = 0; i < array.length; i++) {
//     let item = array[i]
//     console.log(item)
//     console.log(f(item))
//     if (f(item)) {
//       result.push(item)
//     }
//   }
//   return result
// }

// let names = [
//   {firstName: 'beth'},
//   {firstName: 'caithlyn'},
//   {firstName: 'xin'}
// ]

// let result = filter(
//   names,
//   _ => _.firstName.startsWith('b')
// )

// console.log(result)

// //引数と戻り値の型が異なる場合には、ジェネリクスを追加で宣言する(ここでは"U")
// function map<T, U>(array: T[], f: (item: T) => U): U[] {
//   let result = []
//   for (let i = 0; i < array.length; i++) {
//     result[i] = f(array[i])
//     console.log(`result[${i}] = f(array[${i}])`)
//   }
//   console.log(`result: ${result}`)
//   return result
// }

// function isSmallA(_: string): boolean {
//   console.log(`${_} => ${_} === 'a',`)
//   return _ === 'a'
// }

// map(
//   ['a', 'b', 'c'],
//   isSmallA
// )


// // メモ: p75について
// // _ => _ === 'a' は、
// // function f(_) {
// //   _ === 'a'
// // }
// // と同じ
// // map(
// //   ['a', 'b', 'c'],
// //   _ => _ === 'a',
// // )
// // 要するに上は以下の式になる elm: 配列の要素が入る想定

// map(
//   ['a', 'b', 'c'],
//   elm => elm === 'a',
// )

// map<string, boolean>(
//   ['a', 'b', 'c'],
//   _ => _ === 'a',
// )

// map<string, boolean | string>(
//   ['a', 'b', 'c'],
//   _ => _ === 'a',
// )

// // map<string, number>(
// //   ['a', 'b', 'c'],
// //   _ => _ === 'a',
// // )

// let promise = new Promise<number>(resolve =>
//   resolve(45)
// )

// promise.then(result =>
//   result * 4
// )

// type MyEvent<T> = {
//   target: T
//   type: string
// }

// // target: HTMLButtonElement
// type ButtonEvent = MyEvent<HTMLButtonElement>

// let myEvent: MyEvent<HTMLButtonElement | null> = {
//   target: document.querySelector('#myButton'),
//   type: 'click'
// }

// // 共通のTを二つのタイプにバインド
// type TimeEvent<T> = {
//   event: MyEvent<T>
//   from: Date
//   to: Date
// }

// function triggerEvent<T>(event: MyEvent<T>): void {
//   // something...
// }

// triggerEvent({ // 上のTは、この時 Element | nullのいずれかが入る
//   target: document.querySelector('#myButton'),
//   type: 'mouseover'
// })