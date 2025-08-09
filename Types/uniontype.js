function printId(id) {
    console.log(id);
}
printId("34");
printId(12);
function greetings(greet) {
    if (typeof greet === "string") {
        console.log(greet.toUpperCase());
    }
    else {
        console.log(greet);
    }
}
greetings("hello, how are you!");
greetings(143);
