// Both of the following expressions match all strings that contain a digit:

console.log(/[0123456789]/.test("in 1992"));
// → true

console.log(/[0-9]/.test("in 1992"));
// → true


/* 
\d Any digit character
\w An alphanumeric character (“word character”)
\s Any whitespace character (space, tab, newline, and similar)
\D A character that is not a digit
\W A nonalphanumeric character
\S A nonwhitespace character
. Any character except for newline
 */


/* So you could match a date and time format like 01-30-2003 15:20 with the
following expression: */

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// → true
console.log(dateTime.test("30-jan-2003 15:20"));
// → false


/* To invert a set of characters—that is, to express that you want to match any
character except the ones in the set—you can write a caret (^) character after
the opening bracket. */

let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
// → false
console.log(notBinary.test("1100100010200110"));
// → true