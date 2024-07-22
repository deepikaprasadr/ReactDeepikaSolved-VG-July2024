// destructuring

const employee = {
    id: 1,
    firstName: 'Mark',
    lastName: 'Smith',
    email: 'm@gmail.com'
}

// let id = employee.id;
// let firstName = employee.firstName;
// let lastName = employee.lastName;
// let email = employee.email;

// destructuring
let { id, firstName, lastName, email } = employee

//console.log(employee.firstName + ' ' +employee.lastName)
console.log(firstName +  ' ' + lastName)




const scores = [1,2,3,4,5];
// let a = scores[0]
// let b = scores[1]
// let c = scores[2]
// let d = scores[3]
// let e = scores[4]

scores[4] = 100;

const [ a,b,c,d,e ] = scores

console.log(a,b,c,d,e)



