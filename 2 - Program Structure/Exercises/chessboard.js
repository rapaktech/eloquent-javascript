/* Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines.

At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 

When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height. */


let line1 = ' # # # #'
let line2 = '# # # # '

for (let index = 0; index < 4; index++) {
    console.log(line1);
    console.log(line2);
}


console.log(' \n \n ');




// Dynamic Chessboard
let heightValue = height = 7;
let width = 7;
let space = " ";
let hash = "#"

let output1 = output2 = "";
let count = 0;

while (output1.length < width) {
    output1 = output1 + space;
    if(output1.length < width){
        output1 = output1 + hash;
    }
}

while (output2.length < width) {
    output2 = output2 + hash;
    if(output2.length < width){
        output2 = output2 + space;
    }
}

while (count < heightValue) {
   if (count < heightValue) {
        console.log(output1);
        count++;
    }

   if (count < heightValue) {
       console.log(output2);
       heightValue--;
   }
}