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