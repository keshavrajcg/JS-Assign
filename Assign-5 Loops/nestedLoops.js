// Q01
let temp = [28,32,25,40,18,35]
let count=0
for(let i=0 ; i < temp.length ; i++){
    if(temp[i] > 30){
        count++
    }
}
console.log(count);


// // 02
// let n=4729
// let sum=0;

// for(let i=n; i>0 ; i=Math.floor(i/10)){
//     let digit =i%10;
//     sum = sum+digit;
// }
// console.log(sum)

// // // another method;
// let nn=4729;
// let summ=0;

// for(let i=n;)

let nn=4729;
let total=0;

let digits = String(nn)

for(let i =0; i < digits.length; i++){
  total=total+Number(digits[i]);
}
console.log(total);

// Q3
for(let i =1; i<=100 ; i++){
  if(i%3==0 && i%5==0 && i%7!=0){
    console.log(i)
  }
}

// Q4
let given="JavaScript";
let newp = "" ;
for(let i =0 ; i< given.length; i++){
  if(given[i] != "a" && given[i] != "e" && given[i] != "i" && given[i] != "o" && given[i] != "u" && given[i] != "A" && given[i] != "E" && given[i] != "I" && given[i] != "O" && given[i] != "U"){
    newp+=given[i];  
  }
}
    console.log(newp);


// Q5

// skiping 5&6

// Q7
let k = 1
for ( let i = 1; i<8; i++){
    console.log(k*2);
    k *= 2;
}

// Q8
// let a = 0;
// let b = 1;
// for(let i = 0; i <=20 ; i++){
//   let next = a+b;
//   console.log(a);
//   a= b;
//   b=next;
// }


let a = 0;
let b = 1;

for (let i = 0; i < 20; i++) {
    console.log(a);

    let next = a + b;
    a = b;
    b = next;
}



// Qs skip , Part 1-a

// Q2
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let correctPassword = "12345";
let attempts = 0;

function checkPassword() {
    if (attempts === 5) {
        console.log("Account locked");
        rl.close();
        return;
    }

    rl.question("Enter your password: ", function(password) {
        attempts++;

        if (password === correctPassword) {
            console.log("Access granted");
            rl.close();
        } else {
            checkPassword();
        }
    });
}

checkPassword();