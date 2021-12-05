/* Matches and groups
The test method is the absolute simplest way to match a regular expression.
It tells you only whether it matched and nothing else. Regular expressions also
have an exec (execute) method that will return null if no match was found
and return an object with information about the match otherwise. */

let match = /\d+/.exec("one two 100");
console.log(match);
// → ["100"]
console.log(match.index);
// → 8

/* An object returned from exec has an index property that tells us where in
the string the successful match begins. Other than that, the object looks like
(and in fact is) an array of strings, whose first element is the string that was
matched. In the previous example, this is the sequence of digits that we were
looking for. */




// String values have a match method that behaves similarly.

console.log("one two 100".match(/\d+/));
// → ["100"]




/* When the regular expression contains subexpressions grouped with parentheses, 
the text that matched those groups will also show up in the array.

The whole match is always the first element. The next element is the part
matched by the first group (the one whose opening parenthesis comes first in
the expression), then the second group, and so on. */

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
// → ["'hello'", "hello"]



/* When a group does not end up being matched at all (for example, when followed by a question mark), 
its position in the output array will hold undefined.

Similarly, when a group is matched multiple times, only the last match ends
up in the array. */

console.log(/bad(ly)?/.exec("bad"));
// → ["bad", undefined]
console.log(/(\d)+/.exec("123"));
// → ["123", "3"]

/* Groups can be useful for extracting parts of a string. If we don’t just want
to verify whether a string contains a date but also extract it and construct an
object that represents it, we can wrap parentheses around the digit patterns
and directly pick the date out of the result of exec. */