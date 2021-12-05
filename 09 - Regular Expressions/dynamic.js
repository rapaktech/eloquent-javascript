let firstName = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b(" + firstName + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));
// → _Harry_ is a suspicious character.

let firstName = "dea+hl[]rd";
let text = "This dea+hl[]rd guy is super annoying.";
let escaped = firstName.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexp = new RegExp("\\b" + escaped + "\\b", "gi");
console.log(text.replace(regexp, "_$&_"));
// → This _dea+hl[]rd_ guy is super annoying.

console.log(" word".search(/\S/));
// → 2
console.log(" ".search(/\S/));
// → -1