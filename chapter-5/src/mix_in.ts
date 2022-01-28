// class User {
//   id: number
//   name: string
// }

type ClassConstructor<T> = new(...args: any[]) => T

function withEZDebug<C extends ClassConstructor<{
  getDebugValue()
}>>(Class: C) {
  return class extends Class {
    debug() {
      let Name = this.constructor.name
      let value = this.getDebugValue()
      return Name + '(' + JSON.stringify(value) +')'
    }
  }
}

class HardToDebugUser {
  constructor (
    private id: number,
    private firstName: string,
    private lastName: string,
  ) {}
  getDebugValue() {
    return {
      id: this.id,
      name: this.firstName + ' ' + this.lastName
    }
  }
}

class PartyAnimal {
  constructor (
    private id: number,
    private Name: string,
    private Likes: string[],
  ) {}
  getDebugValue() {
    return {
      id: this.id,
      name: this.Name
    }
  }
}

let User = withEZDebug(HardToDebugUser)
let user = new User(3, "Michael", "Jackson")
console.log(user)

let Dog = withEZDebug(PartyAnimal)
let dog = new Dog(1, "Meowy", ["Play", "Drink"])
console.log(user)
console.log(dog)
