// Early improvised modules in JavaScript

const weekDay = function() {
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
    return {
        name(number) { return names[number]; },
        number(name) { return names.indexOf(name); }
    };
}();


console.log(weekDay.name(0));
// → Sunday

console.log(weekDay.number("Friday"));
// → 5