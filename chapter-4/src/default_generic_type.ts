type MyEvent<T extends HTMLElement = HTMLElement> = {
  target: T,
  type: string
}

// let buttonEvent: MyEvent<HTMLButtonElement> = {
//   target: myButton,
//   type: string
// }

// let myEvent: MyEvent = {
//   target: myElement,
//   type: string
// }

type MyEvent2<
  Type extends string,
  Target extends HTMLElement = HTMLElement> = {
  target: Target,
  type: Type
}