interface Animal {
  readonly name: string
  eat(food: string): void
  sleep(hours: number): void
}

interface Feline {
  meow(): void
}

class Cat implements Animal, Feline{
  name = "Yizzy"
  eat(food: string) {
    console.info('Ate some', food, 'Yummy!!')
  }

  sleep(hours: number) {
    console.info('Slept for', hours, 'hours zzz...')
  }

  meow() {
    console.info('Bow Wow!!')
  }
}

let cat = new Cat
console.info(cat.name)
cat.meow()
cat.eat("cat nipAA")
cat.sleep(24)