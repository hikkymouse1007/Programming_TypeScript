// class InvalidDateFormatError extends RangeError {}
// class DateIsInTheFutureError extends RangeError {}

// function isValid(date: Date) {
//   console.log(`date.getTimezoneOffset(): ${date.getTimezoneOffset()}`)
//   return Object.prototype.toString.call(date) === '[object Date]'
//     && !Number.isNaN(date.getTimezoneOffset())
// }

// function ask() {
//   return prompt('When is your birthday?')
// }

// /**
// *@throws {InvalidDateFormatError} ユーザーが誕生日を間違って入力した
// *@throws {DateIsInTheFutureError} ユーザーが未来の誕生日を入力した
// */1
// function parse(
//   birthday: string
// ): Date | InvalidDateFormatError | DateIsInTheFutureError {
//   let date = new Date(birthday)
//   if (!isValid(date)) {
//     return new InvalidDateFormatError('Enter a date in hte form YYYY/MM/DD') // => throw e
//   }
//   if (date.getTime() > Date.now()) {
//     return new DateIsInTheFutureError('Are you a timeload?') // => throw e
//   }
//     return date
// }

//   let result = parse(ask())
//   if (result instanceof InvalidDateFormatError) {
//     console.error(result.message)
//   } else if (result instanceof DateIsInTheFutureError) {
//     console.error(result.message)
//   } else {
//     console.info('Date is', result.toISOString)
//   }

//   // interface RangeError extends Error {} を継承しているのでOK
//   if (result instanceof Error) {
//     console.error(result.message)
//   } else {
//     console.info('Date is', result.toISOString)
//   }

//   type T = any
//   type U = any

//   interface Error1 extends Error {}
//   interface Error2 extends Error {}
//   interface Error3 extends Error {}

//   function x(): T | Error1 {
//     return
//   }

//   function y(): U | Error1 | Error2{
//     let a = x()
//     if (a instanceof Error) {
//       return a
//     }
//   }

//   function z(): U | Error1 | Error2 | Error3{
//     let a = y()
//     if (a instanceof Error) {
//       return a
//     }
//   }

