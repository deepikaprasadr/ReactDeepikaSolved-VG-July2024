// rest parameter
// function foo(a,b,c,d,e){

// }
// foo(1,2,3,4,5)

function foo(...args){
    console.log(args);
}

foo(1)
foo(1,2)
foo(1,2,3)
foo(1,2,3,4,5,6);


function foo2(a,b,...c){
    console.log(a)
    console.log(b)
    console.log(c)
}

foo2(1,2,3,4,5,6,7)