var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var InvalidDateFormatError = /** @class */ (function (_super) {
    __extends(InvalidDateFormatError, _super);
    function InvalidDateFormatError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InvalidDateFormatError;
}(RangeError));
var DateIsInTheFutureError = /** @class */ (function (_super) {
    __extends(DateIsInTheFutureError, _super);
    function DateIsInTheFutureError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DateIsInTheFutureError;
}(RangeError));
function isValid(date) {
    console.log("date.getTimezoneOffset(): ".concat(date.getTimezoneOffset()));
    return Object.prototype.toString.call(date) === '[object Date]'
        && !Number.isNaN(date.getTimezoneOffset());
}
function ask() {
    return prompt('When is your birthday?');
}
/**
*@throws {InvalidDateFormatError} ユーザーが誕生日を間違って入力した
*@throws {DateIsInTheFutureError} ユーザーが未来の誕生日を入力した
*/
function parse(birthday) {
    var date = new Date(birthday);
    if (!isValid(date)) {
        throw new InvalidDateFormatError('Enter a date in hte form YYYY/MM/DD'); // => throw e
    }
    if (date.getTime() > Date.now()) {
        throw new DateIsInTheFutureError('Are you a timeload?'); // => throw e
    }
    return date;
}
try {
    var date = parse(ask());
    console.info('Date is', date.toISOString);
}
catch (e) {
    if (e instanceof InvalidDateFormatError) {
        console.error(e.message);
    }
    else if (e instanceof DateIsInTheFutureError) {
        console.error(e.message);
    }
    else {
        throw e;
    }
}
