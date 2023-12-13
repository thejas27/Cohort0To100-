/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const p = new Promise(function(resolve){
        console.log("inside promise")
        setTimeout(function(){
            resolve();
        },n);
    })
    return p;
}

const value = wait(2 * 1000);
value.then(function()
{
    console.log("resolved");
})