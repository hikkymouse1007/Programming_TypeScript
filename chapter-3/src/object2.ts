let inst1: {
  firstName: string
  lastName: string
} = {
  firstName: 'john',
  lastName: 'barrowman'
}

class Person {
  constructor(
    public firstName: string,
    public lastName: string
  ) {}
}
inst1 = new Person('matt', 'smith')
console.log(inst1)