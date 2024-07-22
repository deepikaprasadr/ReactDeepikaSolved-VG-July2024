// null vs undefined
let a = 10;
let b = "Hello";
let c = 12.34;
let d = true;
let e  = { firstname: 'Mark' }
let f;
let g = null;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

// == vs ===
let x = 10;
let y = '10';

console.log(x == y);  // true
console.log(x === y);  // false


// turnery opeartor
let age = 15;
// if(age > 18){
//     console.log('eligible')
// }else{
//     console.log('not eligible')
// }

// (condition) ? 'true statement' : 'false statement'
let result = (age > 18) ? 'eligible' : 'not eligible';
console.log(result);

