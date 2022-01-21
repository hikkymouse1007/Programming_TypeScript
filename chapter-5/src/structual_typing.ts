class Zebra {
  trot() {}
}

class Poodle {
  trot() {}
}

function ambleAround(animal: Zebra) {
  animal.trot()
}

let zebra = new Zebra
let poodle = new Poodle

ambleAround(zebra)
ambleAround(poodle) // OK

class A {
  private x = 1
}

class B extends A {}
function f(a: A) {}

// f({x: 1}) // エラー