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
// ): Date[] {
//   let date = new Date(birthday)
//   if (!isValid(date)) {
//     return []
//   }
//     return [date]
// }

//   let date = parse(ask())
//   date
//   .map(_ => _.toISOString)
//   .forEach(_ => console.info('Date is', _))
