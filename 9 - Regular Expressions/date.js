/* The Date class
JavaScript has a standard class for representing dates—or, rather, points in
time. It is called Date. If you simply create a date object using new, you get
the current date and time. */

console.log(new Date());
// → 2021-08-07T13:46:41.611Z

const a = new Date();
console.log(a.getHours());
// → 14
console.log(a.getDay());
// → 6

console.log(a.getFullYear());

console.log(a.getMilliseconds());

console.log(a.getMinutes());

console.log(a.getMonth());

console.log(a.getSeconds());

console.log(a.getTime());

console.log(a.getTimezoneOffset());

console.log(a.getUTCDate());

console.log(a.getUTCDay());

console.log(Date.now());
// → 1628344001631


// You can also create an object for a specific time.
console.log(new Date(2009, 11, 9));
// → 2009-12-08T23:00:00.000Z
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
// → 2009-12-09T11:59:59.999Z


console.log(new Date(2013, 11, 19).getTime());
// → 1387407600000
console.log(new Date(1387407600000));
// → 2013-12-18T23:00:00.000Z