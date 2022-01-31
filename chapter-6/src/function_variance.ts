class Animal {}

class Bird extends Animal {
  chirp() {}
}

class Crow extends Bird {
  caw() {}
}

function chirp(bird: Bird): Bird {
  bird.chirp()
  return bird
}

// chirp(new Animal) //エラー
chirp(new Bird)
chirp(new Crow)

function clone(f: (b: Bird)  => Bird): void {
  let parent = new Bird
  let babyBird = f(parent)
  babyBird.chirp()
}

function birdToBird(b: Bird): Bird {
  return b
}

function birdToCrow(b: Bird): Crow {
  return new Crow
}

clone(birdToBird)

clone(birdToCrow)

function birdToAnimal(d: Bird): Animal {
  return new Animal
}

function animalToBird(c: Animal): Bird {
  return new Bird
}

function crowToBird(c: Crow): Bird {
  c.caw()
  return new Bird
}

clone(animalToBird)

clone(crowToBird)
