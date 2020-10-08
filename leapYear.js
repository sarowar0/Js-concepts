// function leapYear(years){
//   var result;
//   if (years%400 == 0) {
//     result = true;
//   }else if(years%4 == 0){
//     result = true
//   }else{
//     result = false
//   }
//   return result
// }

// var output = leapYear(2025);
// console.log(output);



function isLeapYear(year){
  const leap = year % 4 == 0 && year % 100 != 0 || year & 400 ==0;
  if (leap == true) {
    console.log("Leap Year");
  }else{
    console.log("Not Leap Year");
  }
}
isLeapYear(1700);