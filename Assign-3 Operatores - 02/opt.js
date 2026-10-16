// logical OR ||
// 1rect = true;
let otpValid = false;
console.log(passwordCorrect || otpValid);

let passwordCor


// 2
let isMember = false;
let hasCoupon = true;
console.log(isMember || hasCoupon);



// 3
let $age = 16;
let height = 155;
console.log($age > 18 || height > 150);



// 4
let emailGiven = true;
let phoneGiven = false;
console.log(emailGiven || phoneGiven);



// 5
let $score = 900;
let timeBonus = true;
console.log($score > 1000 || timeBonus);

//q6
//42

//q7
//Hello Hi

//q8
//true

//q9
//5 5

//q10
//ok

// logical NOT !
// q1
let isBanned = false;
console.log(!isBanned);


// q2
let isCompleted = false;
console.log(!isCompleted);



// q3
let isOn = true;
console.log(!isOn);



// q4
let isActive = false;
console.log(!isActive);



// q5
let isReadOnly = false;
console.log(!isReadOnly);





//q6 true, false
//q7 false, true
//q8 false
//q9 false
//q10 false


// Mixed LOgical operators

//1q
let is$$Member = true;
let is$Banned = false;

console.log(is$$Member && !is$Banned);

Output: true

//q2
let isStudent = true;
let isSenior = false;
let is$$Banned = true;

console.log((isStudent || isSenior) && !is$$Banned);


//q3
let nameGiven = true;
let email$Given = false;
let phone$Given = true;

console.log(nameGiven && (email$Given || phone$Given));


//q4
let isAdmin = true;
let hasToken = false;
let isSuspended = false;

console.log((isAdmin || hasToken) && !isSuspended);


//q5
let s$core = 1200;
let t$imeBonus = false;
let extraLife = true;

console.log(s$core > 1000 && (t$imeBonus || extraLife));

//q6
let a = 0;
let b = 10;
let c = 20;
let result = a || b && c;
console.log(result);
//20

//q7
let p = true;
let q = false;
let r = true;
let $result = p && q || r;
console.log(result);
// true

//q8
let x = 10;
let y = 20;
let re$sult = !(x && y) || (x > 5 && y < 30) && true;
console.log(re$sult);
// true

//q9
let a$ = 5;
let b$ = 0;
let c$ = 10;
let result$ = a$ && b$ || c$;
console.log(result$);
// true

//q10
let val1 = false;
let val2 = true;
let val3 = false;
let resu$lt = !(val1 || val2) && val3 || true;
console.log(resu$lt);
// true

// part E: Increment / Decrement Operators (++ / --)
// part a
// q1
let counter = 5;
counter++;
console.log(counter);
// q2
let lives = 3;
lives--;
console.log(lives);
// q3
let sco$re = 10;
score++;
console.log(sco$re);
// q4
let items = 8;
items--;
console.log(items);
// q5
let count = 0;
count++;
count++;
console.log(count);

// part b
// q6
let k = 5;
let l = x++;
console.log(k, l);


// q7
let j= 5;
let h = ++a;
console.log(j, h);


// q8
let live$s = 3;
let previousLives = live$s--;
console.log(live$s, previousLives);


// q9
let attempts = 0;
let currentAttempts = ++attempts;
console.log(attempts, currentAttempts);

// q10
let points = 100;
points++;
points--;
console.log(points);

// part c
// q11 12 10 12
// q12 5 10
// q13 7 13
// q14 5 13
// q15 2

//  Part f :typeof operator
// q1
let name = "Rahul";
console.log(typeof name);
// q2
let a$ge = 25;
console.log(typeof a$ge);
// q3
let isS$tudent = true;
console.log(typeof isS$tudent);
// q4
let cit$y;
console.log(typeof cit$y);
// q5
console.log(typeof null);

// q6.
number
string
boolean
undefined
//Q7.
object
object
object
// q8.
number
number
functioN
// q9.
let pr$ice = 99.99;
let message = "Welcome";
let isA$ctive = false;

console.log("price:", typeof pr$ice);
console.log("message:", typeof message);
console.log("isActive:", typeof isA$ctive);

// q10.
object
true

// q11.
string
string
string

// q12.
false
false

// q13.
true
true
true

// q14.
undefined
object
number

// q15.
true
true
number

// Part G: Type Coercion
//  part 1
// q1.
var num = Number("25");
console.log(num + 10);
// q2.
let num = String(100);
console.log(num + " rupees");
// q3.
var value = Boolean(0);
console.log(value);
// q4.
let value = Boolean("Hello");
console.log(value);
// q5.
let num = +"50";
console.log(num * 2);


// q6
5
105
20
5
// q7
3
52
10
2.5
// q8
123
NaN
1
0
0
NaN
// q9
false
false
true
true
true
false
// q10
100
true
null
undefined
100

// part c
// q11.
532
82
4
22
// q12
2
1
truefalse
falsetrue
// q13
5
NaN
null5
undefined5
// q14
""
"[object Object]"
"[object Object]"
"[object Object][object Object]"
// q15.
// 105 string
// 5 number
// 15 number
// q16.
true
false
false
true
false
false
// q17
0
0
0
25
NaN
// q18
52
7
3
10
2.5

// Bonus Mixed Practice Questions:
// q19
number
6
number
7
// 11 11 number number
// q20
// q21 6 5 number number

// q22 string
number
number
number
// q23
object
1
-1
0
falseww