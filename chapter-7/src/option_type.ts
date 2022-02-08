function isValid(date: Date) {
  console.log(`date.getTimezoneOffset(): ${date.getTimezoneOffset()}`)
  return Object.prototype.toString.call(date) === '[object Date]'
    && !Number.isNaN(date.getTimezoneOffset())
}

function ask(): string[] {
  let result = prompt('When is your birthday?') || ''
  if (result === null) {
    return []
  }
  return [result]
}

function parse(
  birthday: string
): Date[] {
  console.log(`typed birthday from prompt: ${birthday}`)
  let date = new Date(birthday)
  if (!isValid(date)) {1
    return []
  }
    return [date]
}

function flatten<T>(array: T[][]): T[]{
  return Array.prototype.concat.apply([], array)
}

flatten(ask().map(parse))
//   .map(date => date.toISOString())
//   .forEach(date => console.info('Date is', date))

  interface Optional<T> {
    flatMap<U>(f: (value: T) => None): None
    flatMap<U>(f: (value: T) => Optional<U>): Optional<U>
    getOrElse(value: T): T
  }

  class Some<T> implements Optional<T>{
    constructor(private value: T) {}
    flatMap<U>(f: (value: T) => None): None
    flatMap<U>(f: (value: T) => Some<U>): Some<U>
    flatMap<U>(f: (value: T) => Optional<U>): Optional<U> {
      console.log(`Some Class`)
      console.log(`this.value: ${this.value}`)
      console.log(`flatMap returns: ${Object.values(f(this.value))}`)
      return f(this.value)
    }
    getOrElse(): T {
      console.log(`Some Class`)
      console.log(`getOrElse returns: ${this.value}`)
      return this.value
    }
  }
  class None implements Optional<never> {
    flatMap(): None{
      console.log(`None Class`)
      console.log(`flatMap() returns ${this}`)
      return this
    }
    getOrElse<U>(value: U): U {
      console.log(`getOrElse returns: ${value}`)
      return value
    }
  }

  // Optionについて： /Applications/Visual Studio Code 2.app/Contents/Resources/app/extensions/node_modules/typescript/lib/lib.dom.d.ts
  function Optional<T>(value: null | undefined): None
  function Optional<T>(value: T): Some<T>
  function Optional<T>(value: T): Optional<T> {
    if (value == null) {
      return new None
    }
    return new Some(value)
  }

  let number = Optional(6)
    .flatMap(n => Optional(n * 3))
    .flatMap(n => new None)
    .getOrElse(7)

  let nullValue = Optional(null)
    .flatMap()
    .getOrElse(null)

  let undefinedValue = Optional(undefined)
    .flatMap()
    .getOrElse(undefined)


   ask()
    .flatMap(parse)
    .flatMap(date => new Some(date.toISOString()))
    .flatMap(date => new Some('Date is ' + date))
    // .getOrElse('Erro parsing date for some reason')
