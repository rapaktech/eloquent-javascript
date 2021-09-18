/* The Date class
JavaScript has a standard class for representing dates—or, rather, points in
time. It is called Date. If you simply create a date object using new, you get
the current date and time. */

console.log(new Date());
// → 2021-09-13T16:35:44.586Z

const a = new Date();
console.log(a.getHours());
// → 17

console.log(a.getDay());
// → 1

console.log(a.getFullYear());
// → 2021

console.log(a.getMilliseconds());
// → 603

console.log(a.getMinutes());
// → 35

console.log(a.getMonth());
// → 8

console.log(a.getSeconds());
// → 44

console.log(a.getTime());
// → 1631550944603

console.log(a.getTimezoneOffset());
// → -60

console.log(a.getUTCDate());
// → 13

console.log(a.getUTCDay());
// → 1

console.log(Date.now());
// → 1631550944631


// You can also create an object for a specific time.
console.log(new Date(2009, 11, 9));
// → 2009-12-08T23:00:00.000Z
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
// → 2009-12-09T11:59:59.999Z


console.log(new Date(2013, 11, 19).getTime());
// → 1387407600000
console.log(new Date(1387407600000));
// → 2013-12-18T23:00:00.000Z

function getDate(string) {
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
}

console.log(getDate("1-30-2003"));
// → 2003-01-29T23:00:00.000Z