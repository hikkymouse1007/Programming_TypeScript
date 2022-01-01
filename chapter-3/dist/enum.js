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
var Language;
(function (Language) {
    Language[Language["English"] = 100] = "English";
    Language[Language["Spanish"] = 500] = "Spanish";
    Language[Language["Russian"] = 501] = "Russian"; // 501と推測
})(Language || (Language = {}));
var Color;
(function (Color) {
    Color["Red"] = "c#10000";
    Color["Blue"] = "#007ac1";
    Color["Pink"] = "#007ac1";
    Color[Color["White"] = 255] = "White";
})(Color || (Color = {}));
var red = Color.Red;
var pink = Color.Pink;
console.log(red);
console.log(pink);
var a = Color.Red;
// let b = Color.Green // Property 'Green' does not exist on type 'typeof Color'.
var c = Color[255];
var d = Color[6];
console.log(d);
