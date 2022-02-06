class InvalidDateFormatError extends RangeError {}
class DateIsInTheFutureError extends RangeError {}

function isValid(date: Date) {
  console.log(`date.getTimezoneOffset(): ${date.getTimezoneOffset()}`)
  return Object.prototype.toString.call(date) === '[object Date]'
    && !Number.isNaN(date.getTimezoneOffset())
}

function ask() {
  return prompt('When is your birthday?')
}

/**
*@throws {InvalidDateFormatError} ユーザーが誕生日を間違って入力した
*@throws {DateIsInTheFutureError} ユーザーが未来の誕生日を入力した
*/
function parse(birthday: string): Date {
  let date = new Date(birthday)
  if (!isValid(date)) {
    throw new InvalidDateFormatError('Enter a date in hte form YYYY/MM/DD') // => throw e
  }
  if (date.getTime() > Date.now()) {
    throw new DateIsInTheFutureError('Are you a timeload?') // => throw e
  }
    return date
}

try {
  let date = parse(ask())
  console.info('Date is', date.toISOString)
} catch (e){
  if (e instanceof InvalidDateFormatError) {
    console.error(e.message)
  } else if (e instanceof DateIsInTheFutureError) {
    console.error(e.message)
  } else {
    throw e
  }
}

