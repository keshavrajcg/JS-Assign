let i = 10;
do{
    console.log(i);
    i--
}while(i>0)


// Q2
let e = 20;
do{
    if(e%2==0){
        console.log(e);
        
    }e--
}while(e>0)


// Q3
let n = 5;
let sum = 0
do{
    sum+=n
    n--
   
}while(n>0)
     console.log(sum)

    
// Q4
let m =234;
let multiplication = 1;

do{
    let digit = m%10;
    m = Math.floor(m/10);
    multiplication = (multiplication*digit)
}while(m>0)
    console.log(multiplication)


// Q5
let f = 58372;
let l = 1;

do{
    
    f = Math.floor(f/10);


}while(f>=10)
    console.log(f);



// Q6
let base = 3;
let exponent = 4;
let result = 1;
let ii = 0;
do{
    result = result * base ;
    ii++
}while(ii<4) // or we can use while(ii<exponent)
    console.log(result);


// Q7
let all = 1;
do{
    if (all %4 ==0 && all %8 !=0 ){
        console.log(all)
    }all++
}while(all<=100)



// Q8
let pd = 1221;
let ch = 1221;
let rev = 0;

do{
    if (ch>0){
        let digits = ch%10;
        ch = Math.floor(ch/10);
        rev = rev*10 + digits
    }
}while(ch>0)
    if(pd==rev){
        console.log("Pallidrome number")
    }else{
        console.log("Not a Pallidrome number")
    }