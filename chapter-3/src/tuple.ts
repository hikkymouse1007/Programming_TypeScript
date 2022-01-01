let a: [number] = [1]

let b: [string, string, number] = ['malcolm', 'gladwell', 1963]
b = ['queen', 'elizabeth', 'ii', 1926] // Type 'string' is not assignable to type 'number'.

let trainFares: [number, number?][] = [
  [3.75],
  [8.25, 7.70],
  [10.50]
]

let moreTrainFares: ([number] | [number, number])[] = [

]

let friends: [string, ...string[]] = ['Sare', 'Tali', 'Chloe', 'Claire']
let list: [number, boolean, ...string[]] = [1, false, 'a', 'b', 'c']

let as: readonly number[] = [1, 2, 3]
let bs: readonly number[] = as.concat(4)
let three = bs[2]

// as[4] = 5
// as.push(6)
type A = readonly string[]
type B = ReadonlyArray<string>
type C = Readonly<string[]>

type D = readonly [number, string]
type E = Readonly<[number, string]>

function a(x: number) {
  if (x < 10) {
    return x
  }
  return null
}

function b() {
  return undefined
}

function c() {
  let a = 2 + 2
  let b = a * a
}

function d() {
  throw TypeError('I always error')
}


// function e() {
//   while (true) {
//     doSomething()
//   }
// }