// enum Language {
// 	English = 0,
// 	Spanish = 1,
// 	Russian = 2,
// }

// let myFirstLanguage = Language.Russian
// let mySecondLanguage = Language['English']

// enum Language {
// 	English = 0,
// 	Spanish = 1,
// }

// enum Language {
// 	Russian = 2,
// }

// enum Language {
// 	English = 100,
// 	Spanish = 200 + 300,
// 	Russian // 501と推測
// }

enum Color {
	Red   = 'c#10000',
	Blue  = '#007ac1',
	Pink  = '#007ac1',
	White = 255,
}

let red = Color.Red
let pink = Color.Pink
console.log(red)
console.log(pink)

let a = Color.Red
// let b = Color.Green // Property 'Green' does not exist on type 'typeof Color'.

let c = Color[255]
let d = Color[6] // undefinedだが実行される
console.log(d)

const enum Language {
	English,
	Spanish,
	Russian
}

let a = Language.English
let b = Language.Tagalog
let c = Language[0] // const 列挙型メンバーは、文字列リテラルを使用してのみアクセスできます。
let d = Language[6] // const 列挙型メンバーは、文字列リテラルを使用してのみアクセスできます。

// const enum Flippable {
// 	Burger,
// 	Chair,
// 	Cup,
// 	Skateboard,
// 	Table,
// }

// function flip(f: Flippable) {
// 	return 'flipped it'
// }

// flip(Flippable.Chair)
// flip(Flippable.Cup)
// flip(12)

const enum Flippable {
	Burger 		 = 'Burger',
	Chair  		 = 'Chair',
	Cup 	 		 = 'Cup',
	Skateboard = 'Skateboard',
	Table 		 = 'Table',
}

function flip(f: Flippable) {
	return 'flipped it'
}

flip(Flippable.Chair)
flip(Flippable.Cup)
flip(12)