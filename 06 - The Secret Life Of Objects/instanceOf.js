const Matrix = require('./iterator');
const SymmetricMatrix = require('./inheritance');

console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);
// → true

console.log(new SymmetricMatrix(2) instanceof Matrix);
// → true

console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
// → false

console.log([1] instanceof Array);
// → true