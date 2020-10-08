function factorial(n){
    if(n==0){
        return 1
    }else{
        return factorial(n-1) * n;
    }
}
var result = factorial(6);
console.log(result);


