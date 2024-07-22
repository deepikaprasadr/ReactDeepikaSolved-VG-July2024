// old syntax
function hello(name){
    return 'Hello '+ name;
}
console.log(hello('John'))

// new syntax or arrow function--short hand syntax for arrowfn
const welcome = (name) => 'Welcome '+ name
console.log(welcome('Mark'))


/*****
 * () - list of parameters or empty
 * => - fat arrow or arrow opeartor
 * {} - expression
 */

const addNumber = (a, b) => a + b;//will work in same line.//operator to inject into the body of function
console.log(addNumber(100, 200))


const subNumber = (a,b) => {
    return a - b
}
console.log(subNumber(200, 100))  // 100



