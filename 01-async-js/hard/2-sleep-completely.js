/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
  let p = new Promise(function(resolve)
  {
    setTimeout(resolve,seconds * 1000);
  })
  return p;
}

    async function sleeps(seconds)
    {
       await sleep(seconds);
    }

    sleeps(10)