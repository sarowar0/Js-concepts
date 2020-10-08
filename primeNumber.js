function isPrime(n){
    for(i =2; i < n; i++){
        if (n % i ==0) {
            console.log(i, n % i);
            break
        }
    }
    console.log(i, n % i);
}
var result = isPrime(25);
console.log(result);

