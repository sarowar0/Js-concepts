//--------COVERT----------//







//Convert inch to feet
function feet(inch){
    return inch/12;
}
var result = feet(66);
console.log("The feet is:" + result);

// Convert cm to meeter
function metre(cm){
    return cm/100
}
var result1 = metre(100);
console.log("The metre is: " +result1);


//meter to kilometer
function kilometer(meter){
    return meter / 1000
}
var result2 = kilometer(2500);
console.log("Kilometer is : " + result2);

//Mile to kilometer
function mile(km){
    return km/1.60934
}
var result3 = mile(2);
console.log(result3);


var year = 2020;
if (year % 400 ==0) {
    console.log("Leap Year");
}else if(year % 4 ==0){
    console.log("Leap year");
}else{
    console.log("Not leap year");
}










//-------FACTORIAL----------//

// 1! =1;                  1 =1!       =1
// 2! = 1*2;               1!*2 =2!    1*2=2
// 3! = 1*2*3              2!*3 =3!    2*3=6
// 4! = 1*2*3*4            3!*4 =4!    6*4=24
// 5! = 1*2*3*4*5          4!*5 =5!    24*5=120
// 6! = 1*2*3*4*5*6        5!*6 =6!    120*6=720
// 7! = 1*2*3*4*5*6*7      6!*7 =7!    720*7=
// 8! = 1*2*3*4*5*6*7*8    7!*8 =8!

function factorial(num){
    
    var factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var result = factorial(7);
console.log(result);



//Find factorial using by while loop

function factorial2(num){
    var i = 1;
    var factorial = 1;
    while (i<=num) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
var factorialWhile = factorial2(7);
console.log(factorialWhile);


//Find factorial using recursive way

function factorialRecursive(n){
    if (n==0) {
        return 1;
    }else{
        return factorialRecursive(n-1) * n;
    }
}
var factorialResult = factorialRecursive(7);
console.log(factorialResult);







//----------------FIBONACCI----------------//





// 0,1,1,2,3,5,8,13,21,34,55,89,144;
// var fibo = [0,1];
// fibo[2] = fibo[2-1] + fibo[2-2]; 1 + 0 = 1;
//fibo[3] = fibo[3-1] + fibo [3-2]; 2-1 + 2-2; =1+1=2
//fibo[4] = fibo[4-1] + fibo [4-2] = 3-1 + 3-2 = 2+ 1 = 3
// fibo[5] = fibo[5-4] + fibo[5-2]; 3+2 = 5
//fibo [6] = fibo[6-1] + fibo[6-2] = 5 + 3 =8
//fibo [7] = fibo [7-1] + fibo [7-2] = 8 +5 = 13;
// fibo[n] = fibo[n-1] + fibo][n-2];

//Find fibonacci by using for loop;
function fibonacci(n){
    var fibo = [0,1];
    for(let i = 2; i<=n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
var result = fibonacci(10);
console.log(result);

// Find fibonacci using while loop;
function fibonacci(n){
    var fibon = [0,1]
    var i = 2
    while(i<=n){
        fibon[i] = fibon[i-1] + fibon[i-2];
        i++
    }
    return fibon;
}
var output = fibonacci(20);
console.log(output);

//Find fibonacci using recursion function

function recursiveFibo(n){
    if (n ==0) {
        return 0
    }else if (n==1) {
        return 1
    }else{
        return recursiveFibo(n-1) + recursiveFibo (n-2);
    }
}

var output = recursiveFibo(40);
console.log(output);



//-------FIND PRIME NUMBER-----//



function isPrime(number){
    for(let i = 2; i < number; i++){
        if (number % i ==0) {
            return "Not prime number"
        }
    }
    return "Prime number"
}
var output = isPrime(17);
console.log(output);