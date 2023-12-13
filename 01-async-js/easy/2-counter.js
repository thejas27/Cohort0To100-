var count = 0;

function counter(sec){

    count += 1;
    setTimeout(counter, 1000);
    console.log(count);


 
}

counter(3)