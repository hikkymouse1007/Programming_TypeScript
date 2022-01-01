let a = 1042
let b = 'apple and orange'
const c = 'pineapples'
let d = [true, true, false]
let e = {type: 'ficus'}
let f = [1, false]
const g = [3]
let h = null

let i: 3 = 3
i = 4 // 型 'number' を型 'boolean' に割り当てることはできません。
let j = [1, 2, 3]
j.push(4)
j.push('5')

let k: never = 4

let l: unknown = 4 // 型 'number' を型 'boolean' に割り当てることはできません。
let m = l *2