// function call(
//   f: (...args: unknown[]) => unknown,
//   ...args: unknown[]
// ): unknown {
//   console.log(`args: ${args}`)
//   console.log(`f(...args): ${f(...args)}`)
//   return f(...args)
// }

function call<T extends unknown[], R>(
  f: (...args: T) => R,
  ...args: T
): R {
  console.log(`args: ${args}`)
  console.log(`f(...args): ${f(...args)}`)
  return f(...args)
}

function fill(length: number, value: string): string[] {
  console.log(`length: ${length}, value: ${value}`)
  console.log(`Array.from({length}, () => value): ${Array.from({length}, () => value)}`)
  return Array.from({length}, () => value) // from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
}

function say(foo: string, bar: string, buzz: string): string[] {
  return [foo, bar, buzz]
}

call(fill, 10, 'a') // fillには2つの引数が必要なので、 fill(f) + 2で3つの引数をcallに渡す
// call(fill, 10, 'a', 'b') // fillには2つの引数が必要なので、 fill(f) + 3で4つの引数をcallに渡すとエラー(引数は3つ必要)
call(say, 'Hi', 'Ms', 'Jessica')