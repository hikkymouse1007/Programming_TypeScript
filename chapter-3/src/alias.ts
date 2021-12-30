type Age = number
type Person = {
    name: string
    age: Age
}

// let age: Age = 55
let age = 55

let driver: Person = {
    name: 'James May',
    age: age
}

type Color = 'red'

let x = Math.random() < .5
console.log(x)

if (x) {
    type Color = 'blue'
    let b: Color = 'blue'
    console.log(b)
} else {
    let c: Color = 'red'
    console.log(c)
}