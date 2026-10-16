// Q1

let i=1
while (i <=10){
    console.log(i)
    i++
}

// Q2
let n = 1;
let sum =0;
while(n<=10){
    sum+=n;
    n++;
}  console.log(sum)

// Q3
let m = 1;

while(m<=10){
    let mlt = 1;

    while(mlt<=10){
        console.log(m*mlt);
        mlt++;
    }
    m++;
}

// or
let ii = 1;
while (i<=10){
    let mn = 1;
    let table =[]

    while (mn<=10){
        table.push(ii*mn);
        mn++;
    }console.log(table.join(mn));
    ii++;
}


// Q4
let c = 58372;
let count =0;
while(c >0){
    count++;
    c= Math.floor(c/10);

}console.log(count);

// or
let cn = "58372";
let countt = 0;
let e =0;

while(e < cn.length){
    countt++;
    e++;
}console.log(countt)


// Q5
let num = 12345;
let reverse = 0;

while(num>0){
    let digit = num % 10;
    num = Math.floor(num/10);
    reverse = (reverse*10)+digit

}console.log(reverse)


// Q6

let number = 4729;
let add = 0;

while (number > 0) {
    let digit = number % 10;  // Get the last digit
    add += digit;        // Add it to sum
    number = Math.floor(number / 10); // Remove the last digit
}

console.log(sum);



// Q7
let l = 1;
while(l<100){
    if (l%3==0 && l%5==0 && l%7!=0){
        
        console.log(l)
    }
    l++;
}


// Q8
let f = 5;
let factorial =1;

while(f>1){
    
    factorial*=f
    f--
}console.log(factorial)


// Q9
let n2 = 121
let n1 = 121;
let reversed = 0;

while (n1>0){
    let digit = n1%10;
    reversed = reversed*10 + digit
    n1 = Math.floor(n1/10)
    
}if(reversed==n2){
        console.log("Pallidrome number")
    }else{
        console.log("Not a Pallidrome")
    }

// Q10
let numm = 13;
let binary = "";

while(numm>0){
    let dgt = numm%2;
    binary = dgt + binary;
    numm = Math.floor(numm/2);

}
console.log(binary)