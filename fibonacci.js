// 0=0, 1=1, 2=1, 3=2, 4=3; 5=5, 6=8, 7 = 13, 8 = 21; 9=34; 10=55; 11 =89; 12=144;
// fibon[2] = fibon[2-1] + fibon[2-2]  = 1 + 0 =1;
// fibon[3] = fibon[3-1] + fibon[3-2]  = 1 + 1 = 2;
// fibon[4] = fibon[4-1] + fibon[4-2]  = 2 + 1; = 3;
// fibon[5] = fibon[5-1] + fibon[5-2]  = 3 + 2 = 5;
// fibon[6] = fibon[6-1] + fibon[6-2]  =5 +  3 = 8;
// fibon[7] = fibon[7-1] + fibon[7-2]  = 8 + 5 = 13;
// fibon[8] = fibon[8-1] + fibon[8-2]  = 13 + 8 = 21
// fibon[9] = fibon[9-1] + fibon[9-2]  =21 + 13 = 34 
// fibon[10] = fibon[10-1] + fibon[10-2]   = 34 + 21 = 55;
// fibon[11] = fibon[11-1] + fibon[11-2]   = 55 + 34;  =89;
// fibon[12] = fibon[12-1] + fibon[12-2]   = 89 + 55; = 144
// fibon[i] = fibon[i-1] + fibon[i-2];

function fibonacci(n){
    var fibon = [0,1];
    for (let i = 2; i <=n; i++) {
        fibon[i] = fibon[i-1] + fibon[i-2];
    }
    return fibon;
}
var result = fibonacci(12)
console.log(result);


function fibonacci2(n){
    
    var fibon = [0,1];
    var i = 2;
    while (i <= n) {
        fibon[i] = fibon[i-1] + fibon [i -2];
        i++
    }
    return fibon;
}
var result = fibonacci2(4)
console.log(result);