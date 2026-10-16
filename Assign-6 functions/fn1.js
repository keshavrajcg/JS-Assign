
 // Q1: Conceptual Understanding
// A function is a reusable block of code that performs a specific task.
// Advantages:
// 1. Code reusability
// 2. Less code repetition
// 3. Easy debugging
// 4. Better code organization


// Q2: Function Declaration

function greetStudent(name) {
    return "Hello " + name + ", welcome to CodingGita!";
}

console.log(greetStudent("Keshav"));
console.log(greetStudent("Rahul"));

// Output:
// Hello Keshav, welcome to CodingGita!
// Hello Rahul, welcome to CodingGita!


// Q3: Hoisting
// Function declarations can be called before they are defined.

sayHello();

function sayHello() {
    console.log("Hello, JavaScript!");
}

// Output:
// Hello, JavaScript!


// Q4: Function Expression

const calculateAverage = function(a, b, c) {
    return (a + b + c) / 3;
};

console.log(calculateAverage(80, 90, 70));

// Output: 80


// Q5: Parameters vs Arguments
// Parameters: x and y
// Arguments: 12 and 5

function multiply(x, y) {
    return x * y;
}

console.log(multiply(12, 5));

// Output: 60


// Q6: Return Statement

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(24));
console.log(isEven(17));

// Output:
// true
// false


// Q7: Multiple Parameters

function findPercentage(obtainedMarks, totalMarks) {
    return (obtainedMarks / totalMarks) * 100;
}

console.log(findPercentage(456, 500));

// Output: 91.2


// Q8: Function Without Return
// A function without an explicit return returns undefined.

function showMessage() {
    console.log("Welcome!");
}

let result = showMessage();

console.log(result);

// Output:
// Welcome!
// undefined


// Q9: Practical Application - Simple Interest

const calculateSimpleInterest = function(principal, rate, time) {
    let si = (principal * rate * time) / 100;
    return si;
};

console.log(calculateSimpleInterest(10000, 5, 2));

// Output: 1000


// Q10: Mixed Concept Question
// Function declarations can be called before definition.
// Function expressions assigned to const cannot be called before initialization.

function studentResult(name, marks) {
    return "Student " + name + " has scored " + marks + " marks.";
}

console.log(studentResult("Keshav", 92));
console.log(studentResult("Rahul", 85));

// Output:
// Student Keshav has scored 92 marks.
// Student Rahul has scored 85 marks.


// Q11: Function Scope

let course = "JavaScript";

function displayAge() {
    let age = 20;
    console.log("Age:", age);
}

function displayCourse() {
    console.log("Course:", course);
}

displayAge();
displayCourse();

// Output:
// Age: 20
// Course: JavaScript

// Uncomment the next line to observe a ReferenceError:
// console.log(age);

// Explanation:
// age is local to displayAge().
// course is global and can be accessed inside displayCourse().


// Q12: Combining Multiple Concepts

function analyzeStudent(name, m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;

    return name + " scored total " + total +
           " with average " + average;
}

console.log(analyzeStudent("Keshav", 80, 90, 70));
console.log(analyzeStudent("Rahul", 75, 85, 95));

// Output:
// Keshav scored total 240 with average 80
// Rahul scored total 255 with average 85


// Q13: Nested Functions

function studentReport(name, m1, m2, m3) {
    function total() {
        return m1 + m2 + m3;
    }

    return name + " total marks: " + total();
}

console.log(studentReport("Keshav", 80, 90, 70));

// Output:
// Keshav total marks: 240


// Q14: Practical - Report Card Generator

function generateReport(name, m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;
    let result;

    if (average >= 40) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    return "Student: " + name +
           "\nTotal Marks: " + total +
           "\nAverage: " + average.toFixed(2) +
           "\nResult: " + result;
}

console.log(generateReport("Keshav", 80, 90, 70));
console.log(generateReport("Rahul", 30, 35, 25));

// Output:
// Student: Keshav
// Total Marks: 240
// Average: 80.00
// Result: Pass
//
// Student: Rahul
// Total Marks: 90
// Average: 30.00
// Result: Fail


// Q15: Practical - Multiple Utility Functions

function sumOfThree(a, b, c) {
    return a + b + c;
}

function averageOfTwo(x, y) {
    return (x + y) / 2;
}

function maxOfTwo(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function fullName(first, last) {
    return first + " " + last;
}

console.log(sumOfThree(10, 20, 30));
console.log(averageOfTwo(40, 60));
console.log(maxOfTwo(25, 15));
console.log(fullName("Keshav", "Raj"));

// Output:
// 60
// 50
// 25
// Keshav Raj


// Q16: Practical - Grade Calculator

const calculateGrade = function(percentage) {
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 80) {
        return "A";
    } else if (percentage >= 70) {
        return "B";
    } else if (percentage >= 60) {
        return "C";
    } else if (percentage >= 40) {
        return "D";
    } else {
        return "F";
    }
};

console.log(calculateGrade(95));
console.log(calculateGrade(82));
console.log(calculateGrade(67));
console.log(calculateGrade(45));
console.log(calculateGrade(32));

// Output:
// A+
// A
// C
// D
// F


// Q17: Practical - Shopping Discount

function calculateFinalPrice(price, discountPercent) {
    let discount = (price * discountPercent) / 100;
    return price - discount;
}

console.log(calculateFinalPrice(2500, 15));
console.log(calculateFinalPrice(1200, 10));

// Output:
// 2125
// 1080


// Q18: Practical - Temperature Converter

const celsiusToFahrenheit = function(c) {
    return (c * 9 / 5) + 32;
};

const fahrenheitToCelsius = function(f) {
    return (f - 32) * 5 / 9;
};

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(25));
console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(98.6));

// Output:
// 32
// 77
// 0
// 37


// Q19: Mixed Advanced Question
// A function expression assigned to const cannot be called
// before its initialization because of the temporal dead zone.

const greet = function() {
    console.log("Hello!");
};

greet();

// Nested function example

function calculateRectangle(length, width) {
    function area() {
        return length * width;
    }

    return "Rectangle area: " + area();
}

console.log(calculateRectangle(10, 5));

// Output:
// Hello!
// Rectangle area: 50


// Q20: Challenge Question

function processStudent(name, m1, m2, m3) {
    function calculateTotal() {
        return m1 + m2 + m3;
    }

    function calculateAverage() {
        return calculateTotal() / 3;
    }

    let total = calculateTotal();
    let average = calculateAverage();
    let result;

    if (average >= 40) {
        result = "Pass";
    } else {
        result = "Fail";
    }

    return "Student: " + name +
           "\nTotal: " + total +
           "\nAverage: " + average.toFixed(2) +
           "\nResult: " + result;
}

function compareAverages(avg1, avg2) {
    if (avg1 > avg2) {
        return "First average is higher.";
    } else if (avg2 > avg1) {
        return "Second average is higher.";
    } else {
        return "Both averages are equal.";
    }
}

console.log(processStudent("Keshav", 80, 90, 70));
console.log(processStudent("Rahul", 75, 85, 95));
console.log(processStudent("Amit", 30, 35, 25));

console.log(compareAverages(80, 85));
console.log(compareAverages(90, 70));
console.log(compareAverages(75, 75));

// Output:
// Student: Keshav
// Total: 240
// Average: 80.00
// Result: Pass
//
// Student: Rahul
// Total: 255
// Average: 85.00
// Result: Pass
//
// Student: Amit
// Total: 90
// Average: 30.00
// Result: Fail
//
// Second average is higher.
// First average is higher.
// Both averages are equal.
