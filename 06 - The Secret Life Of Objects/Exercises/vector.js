/* A vector type
Write a class Vec that represents a vector in two-dimensional space.
It takes x and y parameters (numbers), which it should save to properties of the same name.

Give the Vec prototype two methods, plus and minus, that take another
vector as a parameter and return a new vector that has the sum or difference
of the two vectors’ (this and the parameter) x and y values.

Add a getter property length to the prototype that computes the length of
the vector — that is, the distance of the point (x, y) from the origin (0, 0). */



class vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length() {
        return this.y / this.x;
    }

    plus(vector) {
        return {
            x: this.x + vector.x,
            y: this.y + vector.y
        }
    }

    minus(vector) {
        return {
            x: this.x - vector.x,
            y: this.y - vector.y
        }
    }
}


let vector1 = new vector(3, 5);

let vector2 = new vector(2, 1);

console.log(vector1.length);

console.log(vector2.length);

console.log(vector1.plus(vector2));

console.log(vector1.minus(vector2));