
function clock()
{
  
    setInterval(function(){
    
        
    let currentdate = new Date();
    let hour = currentdate.getHours();
    let min = currentdate.getMinutes();
    let sec = currentdate.getSeconds();
    console.log(hour + ":" + min + ":" + sec);
    },1000);
}

clock()

function clock12()
{
  
    setInterval(function(){
    
        
    let currentdate = new Date();
    let hour = currentdate.getHours();
    let min = currentdate.getMinutes();
    let sec = currentdate.getSeconds();
    let noon = "";
    if(hour > 12 && hour <=23)
    {
        hour = hour - 12;
        noon = "PM"
    }
    else
    {
        noon = "AM";
    }
   
    console.log(hour + ":" + min + ":" + sec + noon);
    },1000);
}

clock12()