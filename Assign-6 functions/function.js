// Q1

// => Function is a tool which help us to define something which can be used again and again
// 1. It helps in creating big programms.
// 2. It doesn't create mess and makes our code clean.
// 3. It can be called anywhere using function calling.
// 4. It can be reused again and agian.

// Better answer ;
// A function is a reusable block of code designed to perform a specific task.
// Instead of writing the same logic repeatedly, you write it once inside a function and call it whenever required.

// Functions help in:

// Reusability
// Cleaner code
// Reduced repetition
// Better structure
// Easier debugging.


// Q2
function greetStudent(name){
    return "Hello" +" "+ name +" "+ "Welcome to CodingGita!"
}
console.log(greetStudent("Sumit"))


// Q3
// Hoisting meams the Js compiler loads the code fully first then it starts to read and execute it line by line.
hoisting()

function hoisting(){
    console.log("This is an example of hoisting")
}



// Q4
var calculateAverage = function (a, b, c) {
    return (a + b + c) / 3;

}
console.log(calculateAverage(80,90,70))


// Q5
// Parameters are the placeholders defined in a function's signature, whereas arguments 
// are the actual values passed to the function when it is called


function multiply(x, y) {                //=>This is parameter where we declare the variables
    return x * y;
}
console.log(multiply(12, 5));            //=>This is an argument where we provide values



// Q6
function isEven(n){
    if (n%2==0){
        return true
    }else{
        return false
    }
}
console.log(isEven(24))
console.log(isEven(17))


// Q7
function findPercentage(obtainedMarks, totalMarks){
    return (obtainedMarks/totalMarks) *100
}
console.log(findPercentage(456,500))


// Q8
function withoutReturn(){
    console.log("This is a function whihtout using return")
}
result = withoutReturn();
console.log(result)

// Output: "This is a ..." ,, "undefined"



// Q9
function calculateSimpleInterest(principal, rate, time){
    SI = (principal*rate*time)/100
    return SI
}
console.log(calculateSimpleInterest(10000, 5 , 2))


// Q10
// function declarations are fully hoisted, meaning they can be called before they are defined in the code, whereas function expressions are not hoisted in the same way and cannot be called until the execution flow reaches the line where they are defined.

function studentName(){
    
}