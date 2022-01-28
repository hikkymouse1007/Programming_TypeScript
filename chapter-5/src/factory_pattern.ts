type Shoe = {
  purpose: string
}

class BalletFlat implements Shoe {
  purpose: 'dancing'
}

class Boot implements Shoe {
  purpose: 'woodcutting'
}

class Sneaker implements Shoe {
  purpose: 'walking'
}


let Shoe = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
    switch (type) {
      case 'balletFlat': return new BalletFlat
      case 'boot': return new Boot
      case 'sneaker': return new Sneaker
    }
  }
}

let balletFlat = Shoe.create('balletFlat')
let boot = Shoe.create('boot')
let sneaker = Shoe.create('sneaker')
console.log(balletFlat.purpose) //ES6の仕様では、undefinedになる
console.log(boot.purpose)
console.log(sneaker.purpose)
