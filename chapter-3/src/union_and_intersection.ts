type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

// Cat
let a: CatOrDogOrBoth = {
	name: 'Bonkers',
	purrs: true
}
console.log(a)

// Dog
a = {
	name: 'Domino',
	barks: true,
	wags: true
}

a = {
	name: 'Domino',
	barks: true,
	wags: true
}
console.log(a)

// Both
a = {
	name: 'Donkers',
	barks: true,
	purrs: true,
	wags: true
}
console.log(a)

let b: CatAndDog = {
	name: 'Donkers',
	barks: true,
	purrs: true,
	wags: true
}

console.log(b)

function trueOrNull(isTrue: boolean) {
	if (isTrue) {
		return 'true'
	}
	return null
}