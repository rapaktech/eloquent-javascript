/* Borrowing a method

Earlier in the chapter I mentioned that an object’s hasOwnProperty can be
used as a more robust alternative to the in operator when you want to ignore
the prototype’s properties.

But what if your map needs to include the word
"hasOwnProperty"? You won’t be able to call that method anymore because
the object’s own property hides the method value.

Can you think of a way to call hasOwnProperty on an object that has its own
property by that name? */


class MyObject {
    constructor() {
    }
    
    hasOwnProperty(thisVarWillBeIgnored) {
      console.log("I do what I want");
    }
  }
  let myObject = new MyObject("hopeful");
  myObject.hasOwnProperty('test'); // returns "I do what I want"
  console.log(MyObject.hasOwnProperty.call(this, 'test'));  // returns false