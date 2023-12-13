function counter(sec)
{
    counter = 0
   const count = setInterval(() => {
        if(counter == sec)
        {
            clearInterval(count);
        }
        else
        {
         
        counter++;
        console.log(counter);   
        }
    }, 1000);
}

counter(60)