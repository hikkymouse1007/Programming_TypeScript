// let set = new Set
// set.add(1).add(2).add(3)
// console.log(set.has(2))
// console.log(set.has(4))

// class SetDuble<T> {
//   public array: T[] // publicは省略可能
//   constructor (
//     array: T[]
//   ) {
//     this.array = array
//   }
//   has(value: T): boolean {
//     return this.array.includes(value)
//   }

//   add(value: T) {
//     this.array.push(value)
//   }
// }

// class MutableSet<T> extends SetDuble<T> {
//   constructor (
//     array: T[]
//   ) {
//     super(array)
//   }

//   delete(value: T): boolean {
//     console.log(`inside_before: ${this.array}`)
//     this.array = this.array.filter(
//       num => num != value
//     )
//     console.log(`inside_after: ${this.array}`)
//     return true
//   }
// }

// class MutableSet<T> extends SetDuble<T> {
//   constructor (
//     array: T[]
//   ) {
//     super(array)
//   }

//   delete(value: T): boolean {
//     console.log(`inside_before: ${this.array}`)
//     this.array = this.array.filter(
//       num => num != value
//     )
//     console.log(`inside_after: ${this.array}`)
//     return true
//   }
// }

// let setDouble = new SetDuble([])
// console.log(`first: ${setDouble.has(1)}`)

// setDouble.add(1)
// console.log(setDouble.has(1))

// let mutableSet = new MutableSet([0, 1, 2, 3])

// console.log(mutableSet.has(1))
// console.log(mutableSet.array)

// mutableSet.delete(1)
// console.log(mutableSet.has(1))
// console.log(mutableSet.array)

// class SetDuble {
//   has(value: boolean): boolean {
//     return [].includes(value)
//   }

//   add(value: T) {
//     this.array.push(value)
//   }
// }

class SetDuble {
  has(value: number): boolean {
    return true
  }

  add(value: number): this {
    return this
  }
}

class MutableSet extends SetDuble {
  delete(value: number): boolean {
    return true
  }
}
