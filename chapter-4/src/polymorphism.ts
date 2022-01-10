function filter(array, f) {
  let result = []
  console.log(f)
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    console.log(item)
    console.log(f(item))
    if (f(item)) {
      result.push(item)
    }
  }
  return result
}

filter([1, 2, 3, 4], _ => _ < 3)

type Filter = {
  (array: unknown[], f: (item: number) => boolean): number[]
}