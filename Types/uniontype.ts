function printId(id: number | string){
    console.log(id);
}
printId ("34");
printId(12);


function greetings (greet:string | number){
    if(typeof greet === "string"){
        console.log(greet.toUpperCase());
    }else{
        console.log(greet);
    }
}

greetings("hello, how are you!");

greetings(143);