/* Comments
It would be nice if we could write comments in Egg. For example, whenever
we find a hash sign (#), we could treat the rest of the line as a comment and
ignore it, similar to // in JavaScript.
We do not have to make any big changes to the parser to support this. We
can simply change skipSpace to skip comments as if they are whitespace so that
all the points where skipSpace is called will now also skip comments. Make
this change. */