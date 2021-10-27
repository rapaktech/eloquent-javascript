/* Regexp golf
Code golf is a term used for the game of trying to express a particular program
in as few characters as possible. Similarly, regexp golf is the practice of writing
as tiny a regular expression as possible to match a given pattern, and only that
pattern.
For each of the following items, write a regular expression to test whether any
of the given substrings occur in a string. The regular expression should match
only strings containing one of the substrings described. Do not worry about
word boundaries unless explicitly mentioned. When your expression works, see
whether you can make it any smaller.
1. car and cat
2. pop and prop
3. ferret, ferry, and ferrari
4. Any word ending in ious
5. A whitespace character followed by a period, comma, colon, or semicolon
6. A word longer than six letters
7. A word without the letter e (or E)
Refer to the table in the chapter summary for help. Test each solution with
a few test strings.
 */


// 1. "car" and "cat"
let a = /ca(r|t)/;
console.log(a.exec("cat"));

// 2. "pop" and "prop"
let b = /pr?op/;
console.log(b.exec("prop"));

// 3. "ferret", "ferry" and "ferrari"
let c = /ferr(et|y|ari)/;
console.log(c.exec("ferrari"));

// 4. Any word ending with "ious"
let d = /\w+(ious)/;
console.log(d.exec("spurious"));

// 5. A whitespace character followed by a period, comma, colon, or semicolon
let e = /\s(.|,|:|;)/;
console.log(e.exec(" ."));

// 6. A word longer than six letters
let f = /[\w]{6,}/;
console.log(f.exec("123456"));

// 7. A word without the letter e (or E)
let g = /\b[^e\\W]+\b/gi;
console.log(g.exec("bbdsss danger friedman purple pink"));