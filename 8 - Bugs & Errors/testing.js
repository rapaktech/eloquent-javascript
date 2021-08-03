function test(label, body) {
    if (!body()) console.log(`Failed: ${label}`);
}
    

test("convert Latin text to uppercase", () => {
    return "hello".toUpperCase() == "HELLO";
});


test("convert Greek text to uppercase", () => {
    return "Χαίρετε".toUpperCase() == "ΧΑΊΡΕΤΕ";
});
    

test("don't convert case-less characters", () => {
    return "ࢎ࠶߈ఆ௷".toUpperCase() == "ࢎ࠶߈ఆ௷";
});