// type ClassConstructor<T> = new(...args: any[]) => T

// function serializable<
//   T extends ClassConstructor<
//   {
//     getValue(): Payload
//   }>
// > (Constructor: T) {
//   serialize() {
//     return this.getValue().toString()
//   }
// }
