// function fibonacci(n){
//     if (n==0) {
//         return 0;
//     }else if (n==1) {
//         return 1
//     }else{
//         return fibonacci(n-1) + fibonacci(n-2)
//     }
// }
// var result = fibonacci(10);
// console.log(result);


// fibonacci [0,1];
// fibonacci[2] = fibonacci[2-1] + fibonacci[2-2];
// fibonacci[3] = fibonacci[3-1] + fibonacci[3-2];
// fibonacci[4] = fibonacci[4-1] + fibonacci[4-2];



function fibonacci(n){
    if (n==0) {
        return 0
    }else if (n==1) {
        return 1
    }else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
var result = fibonacci(10);
console.log(result);