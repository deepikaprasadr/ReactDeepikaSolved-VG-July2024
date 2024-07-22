// not using default parameters
function say(message){
    message = typeof message === 'undefined' ? 'Hi' : message
    console.log(message)
}
say('Hello')  // hello
say()       // undefined  | Hi



// using default parameters
function say2(message = 'Hi'){
    console.log(message)
}
say2('Hello')
say2()