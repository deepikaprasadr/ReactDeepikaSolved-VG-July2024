//spread operator ... 
/*Javascript spread operator allows to quickly copy all or part of an existing array 
or object into another array or object*/

const employee = {
    id: 1,
    firstName: 'Mark',
    lastName: 'Smith',
    status: false
}

const oldEmployee = {
    ...employee,
    status: true
}


console.log(employee)
console.log(oldEmployee)
//deepika practice
const emp2019deepika={
    id:2,
    fname:'Deepika',
    lname:'Prasad',
    address:'DesPl'
}
const emp2024deepika={
    ...emp2019deepika,
    address:'WLaf',
    status:true
}
console.log(emp2019deepika);//{ id: 2, fname: 'Deepika', lname: 'Prasad', address: 'DesPl' }
console.log(emp2024deepika);//{ id: 2, fname: 'Deepika', lname: 'Prasad', address: 'DesPl',status: true }

