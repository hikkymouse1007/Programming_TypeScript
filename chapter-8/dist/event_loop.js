// setTimeout(function () { return console.info('A'); }, 1);
// setTimeout(function () { return console.info('B'); }, 2);
// console.info('C');

setTimeout(function () { return console.info('second'); }, 3000);
setTimeout(function () { return console.info('third'); }, 2000);
console.info('first');
