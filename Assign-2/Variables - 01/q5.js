let student = {
    name: "Keshav" ,
    age : 17,
    isEnrolled: true
}

console.log (student.name , student.age);

let numbers = [1,2,3,4,5];
let mixed = [1,"hello" , true , null];

console.log(numbers[0] , numbers[4]);
console.log(mixed);

function greet(name) {
    return "Hello , " + name + "!";
}

let message1 = greet("Jackline");
let message2 = greet("Kriti")

console.log(message1 )
console.log(message2)