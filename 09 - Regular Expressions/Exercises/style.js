/* Quoting style
Imagine you have written a story and used single quotation marks throughout
to mark pieces of dialogue. Now you want to replace all the dialogue quotes
with double quotes, while keeping the single quotes used in contractions like
aren’t.
Think of a pattern that distinguishes these two kinds of quote usage and
craft a call to the replace method that does the proper replacement. */

function stripSingleQuotes(string) {
    return string.replace(/'\b((\w+\s*)+)\b'/g, '"$1"');
}

/'(\w+)(\s?)+'/g;

/'[^s]+|/g;
console.log(stripSingleQuotes("a man's once said 'Dying is cool again'. I literally quit. 'But is it better to die', he asked?"));