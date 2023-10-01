// let hour = 7
// let result = '';
// const name = 'Akorede';

// if (hour >= 6 && hour <= 12){
//   result = 'Goodmorning';
  
 

// }else if ( hour >= 13 && hour <= 17 ) {
// result = `Goodafternoon`;

// } else if (hour >= 18){
// result = `Goodnight`;

// }
// console.log( `${result} ${name}`);


// let age = 5;
// let result2 ='';
// const isHoliday = true;


// if ((isHoliday) && (age <= 6 || age >= 68)) {
//   result2 = `Discount`;

// }  else {
//   result2 =`No discount`
// }
// console.log(result2);

let randomNumber = Math.random();
 let result3 ='';
 

if (randomNumber <= 0.5){
  result3 = 'head';

} else if (randomNumber >= 0.5){
  result3 = 'tail';
}
let guess = 'head';
if (result3 === guess){
  console.log( 'you win');

} else if (result3 === 'tail'){
  console.log('you losee');
}

// console.log(result3);