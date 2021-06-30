const Matrix = require('./iterator');


class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if (x < y) return element(y, x);
            else return element(x, y);
        });
    }
    set(x, y, value) {
        super.set(x, y, value);
        if (x != y) {
            super.set(y, x, value);
        }
    }
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x}, ${y}`);

console.log(matrix.get(2, 3));
// → 3, 2

module.exports = Matrix, SymmetricMatrix;