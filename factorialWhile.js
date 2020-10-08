// var i = 1;
// var factorial = 1;
// while (i<=5) {
//     factorial = factorial * i;
//     console.log(factorial);
//     i++;
// }


function factorial(num){
    var i = 1;
    var factorial = 1;
        while (i<=num) {
            factorial = factorial * i;
            console.log(factorial);
            i++;
        }
}
var result = factorial(1);
console.log(result);