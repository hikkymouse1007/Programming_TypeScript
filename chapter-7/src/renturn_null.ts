// function ask() {
//   return prompt('When is your birthday?')
// }

// function parse(birthday: string): Date {
//   let date = new Date(birthday)
//   if (!isValid(date)) {
//     return null
//   }
//     return date
// }

// let date = parse(ask())
// if (date) {
//   console.info('Date is', date.toISOString)
// } else {
//   console.error('Error parsing date for some reason')
// }


// function isValid(date: Date) {
//   return Object.prototype.toString.call(date) === '[object Date]'
//     && !Number.isNaN(date.getTimezoneOffset())
// }
