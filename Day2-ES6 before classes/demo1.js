// function dosomething() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log("outside: " + i); //not accessible outside i
// }
// dosomething();

var a = 100;
console.log(a)  // 100
{
    let a = 200; 
    console.log(a)  // 200
}
console.log(a)  // 100

//------redo the code(starts)----
function dosomething1()
{
    for(let i=0;i<5;i++)
    {
        console.log(i);
    }
    console.log("outside:"+i)
}dosomething1()
//------redo the code(ends)----