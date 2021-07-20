/* Groups
The standard JavaScript environment provides another data structure called Set.

Like an instance of Map, a set holds a collection of values. Unlike Map, it
does not associate other values with those — it just tracks which values are part
of the set.

A value can be part of a set only once—adding it again doesn’t have any effect.
Write a class called Group (since Set is already taken).

Like Set, it has add, delete, and has methods.
Its constructor creates an empty group, add adds a value to 
the group (but only if it isn’t already a member), delete removes
its argument from the group (if it was a member), and has returns a Boolean
value indicating whether its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, to determine
whether two values are the same.

Give the class a static from method that takes an iterable object as argument
and creates a group that contains all the values produced by iterating over it. */


class Group {
    constructor() {
        return this;
    }
    add (value) {
        if (value in this) {
            return `Value ${value} is already in the group`;
        } else {
            this[value] = value;
            this.length++;
            return `Value ${value} has been sucessfully added to the group`;
        }
    }

    delete (value) {
        if (value in this) {
            delete this[value];
            return `Value ${value} has been sucessfully removed from the group`; 
        } else {
            return `Value ${value}  is not in the group`;
        }
    }

    has (value) {
        if (value in this) {
            return `Value ${value} is in the group`; 
        } else {
            return `Value ${value} is not in the group`;
        }
    }

    static from(object) {
        for (const item in object) {
            this[item] = item;
        }
        return this;
    }
}




const group1 = new Group;

console.log(group1.length);

console.log(group1.add(7));

console.log(group1.add(7));

console.log(group1.delete(8));

console.log(group1.delete(7));

console.log(group1.add(8));

console.log(group1.has(8));

console.log(group1.has(7));

console.log(group1);

const object1 = {
    "agba": "Wire",
    "wire": "01"
}

const group2 = Group.from(object1);

console.log(group2);