function add(a: number, b: number) :number {
  return a + b
}

function greet(name: string) {
  return 'hello' + name
}

let greet2 = function(name: string) {
  return 'hello' + name
}

let greet3 = (name: string) => {
  return 'hello' + name
}

let greet4 = (name: string) =>
  'hello' + name

let greet5 = new Function('name', 'return "hello " + name')

add(1, 2)
greet('Crystal')

// add(1)
// add(1, 'a')

function log(message: string, userId?: string) {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, userId || 'Not signed in')
}

log('Page loaded')
log('User signed in', 'da763be')

function log2(message: string, userId = 'Not signed in') {
  let time = new Date().toLocaleTimeString()
  console.log(time, message, userId)
}

log2('User clicked on a button', 'da763be')
log2('User signed out')

type Context = {
  appId?: string
  userId?: string
}

function log3(message: string, context: Context = {}) {
  let time = new Date().toISOString()
  console.log(time, message, context.userId)
}

function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0)
}

console.log(sum([1, 2, 3]));

function sumVariadic(): number {
  return Array
    .from(arguments)
    .reduce((total, n) => total + n, 0)
}

// sumVariadic(1, 2, 3)

