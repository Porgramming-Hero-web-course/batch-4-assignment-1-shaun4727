*******************************************************************************************
*How to handle asynchronous operations using async/await over callback/promise TypeScript.*
*******************************************************************************************

What is Synchronous Operation?
-----------------------------------------

Suppose, a javascript function has some instructions. If one instruction waits till another instruction to be 
executed, it is called synchronous operation.

example:
------------------
function operation(){
    console.log('this is from function')
} 
console.log('This is first instruction');
operation();
console.log('This is last instruction');








What is asynchronous operation?
---------------------------------------
Suppose there is a set of instructions where no instruction waits for another to be completed, then in that 
case it is called asynchronous operation.

example:
--------------
function operation(){
    setTimeout(()=>{
        console.log('it is from function');
    },3000)
}
console.log('It is instruction one');
operation();
console.log('It is instruction two');








callback:
--------------------
There are many ways to handle asynchronous operations. Callback is one of them.
If a function is passed as an argument to another function, it is called callback function. It is executed 
after the execution of first function.

example:
--------------------
function operation(){
    setTimeout(()=>{
        let name = 'Bob';
        printName(name);
    },3000)
}

function printName(name){
    console.log(name);
}
console.log('It is instruction one');
operation(printName);
console.log('It is instruction two');

callback function is useful to achieve asynchronous operations but it has drawback.
If we have to chain multiple callback together, functions should be nested. These nested functions are 
called callback hell. It is dificult to understand and maintain if there is callback hell.

To avoid callback hell, we can use promise.






promise:
-------------
It is an object which indicates completion or failure of an asynchronous operation. It is more cleaner way to
write javascript code.

.then and .catch methods are used to indicate fullfillment or failure of a promise.

const TestPromise = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve('greetings from here');
    },2000)
})

TestPromise.then(res => {
    console.log(res);
}).catch(err => console.log(err));



Async/Await:
-----------------
Another way to handle asynchronous operations is async/await. It makes code look synchronous and makes 
code more readable.
If we use async before a function, its instructions becomes asynchronous. we can use await to wait execution next instruction before completing current instruction.

async function test(){
    try{
        const res = await fetch('api');
        const data = await response.json();
        console.log(data);
    }catch(err){
        console.log(err);
    }

}
getData();




conclusion:
--------------------------
Though using promise with callback made our job easier but chaining multiple then can
make maintainability cubersome and can lead to complex code.

On the otherhand, async/await is more cleaner and readable way to code. we can use try/catch block to
avoid crash of software.
