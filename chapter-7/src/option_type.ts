function isValid(date: Date) {
  console.log(`date.getTimezoneOffset(): ${date.getTimezoneOffset()}`)
  return Object.prototype.toString.call(date) === '[object Date]'
    && !Number.isNaN(date.getTimezoneOffset())
}

function ask() {
  let result = prompt('When is your birthday?')
  if (result === null) {
    return[]
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
  .map(date => date.toISOString())
  .forEach(date => console.info('Date is', date))

  interface Option<T> {
    flatMap<U>(f: (value: T) => Option<U>): Option<U>
    getOrElse(value: T): T
  }

  class Some<T> implements Option<T>{
    constructor(private value: T) {}
    flatMap<U>(f: (value: T) => Option<U>): Option<U> {
      return f(this.value)
    }
    getOrElse(): T {
      return this.value
    }
  }
  class None implements Option<never> {
    flatMap<U>(): Option<U>{
      return this
    }
    getOrElse<U>(value: U): U {
      return value
    }
  }
