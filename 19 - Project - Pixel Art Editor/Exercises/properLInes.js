/* Proper lines
This is a more advanced exercise than the preceding two, and it will require
you to design a solution to a nontrivial problem. Make sure you have plenty
of time and patience before starting to work on this exercise, and do not get
discouraged by initial failures.
On most browsers, when you select the draw tool and quickly drag across
the picture, you don’t get a closed line. Rather, you get dots with gaps 
between them because the "mousemove" or "touchmove" events did not fire quickly
enough to hit every pixel.
Improve the draw tool to make it draw a full line. This means you have to
make the motion handler function remember the previous position and connect
that to the current one.
To do this, since the pixels can be an arbitrary distance apart, you’ll have
to write a general line drawing function.
A line between two pixels is a connected chain of pixels, as straight as possible, 
going from the start to the end. Diagonally adjacent pixels count as a
connected. So a slanted line should look like the picture on the left, not the
picture on the right.

(PIcture saved as properLines.png in 'Exercises' folder)

If we have code that draws a line between two arbitrary points, we might as
well use it to also define a line tool, which draws a straight line between the
start and end of a drag. */