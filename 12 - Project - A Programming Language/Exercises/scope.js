/* Fixing scope
Currently, the only way to assign a binding a value is define. This construct
acts as a way both to define new bindings and to give existing ones a new value.
This ambiguity causes a problem. When you try to give a nonlocal binding
a new value, you will end up defining a local one with the same name instead.
Some languages work like this by design, but I’ve always found it an awkward
way to handle scope.
Add a special form set, similar to define, which gives a binding a new value,
updating the binding in an outer scope if it doesn’t already exist in the inner
scope. If the binding is not defined at all, throw a ReferenceError (another
standard error type).
The technique of representing scopes as simple objects, which has made
things convenient so far, will get in your way a little at this point. You might
want to use the Object.getPrototypeOf function, which returns the prototype
of an object. Also remember that scopes do not derive from Object.prototype,
so if you want to call hasOwnProperty on them, you have to use this clumsy
expression:
Object.prototype.hasOwnProperty.call(scope, name); */