/* Iterable groups

Make the Group class from the previous exercise iterable. Refer to the section
about the iterator interface earlier in the chapter if you aren’t clear on the
exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the
iterator created by calling the Symbol.iterator method on the array. That
would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration. */



class Group {
    constructor() {
      this.group = [];
      return this;
    }
      
    add(value) {
      if (!this.has(value)) {
        this.group.push(value);
        return this;
      }
    }
    
    delete(value) {
      if (this.has(value)) {
        this.group = this.group.filter(x => x !== value);
        return this;
      }
    }
    
    has(value) {
      return this.group.includes(value);
    }
    
    from(iterableObject) {
      for (let value of iterableObject) {
        this.add(value);
      }
      return this;
    }
}



class GroupIterator {
    constructor(group) {
      this.x = 0;
      this.group = group.group;
    }
    
    next() {
      if (this.x === this.group.length) return {done: true};
      
      let value = this.group[this.x];
      this.x++
      
      return {value, done: false}
    }
}


Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}


let group = new Group;


for (let el of group.from([4, 5, 6])) {
    console.log(el); // Returns 4 \ 5 \ 6
}