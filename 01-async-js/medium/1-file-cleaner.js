const { error } = require("console");
const fs = require("fs");
let str ="";

str = fs.readFileSync("a.txt","utf-8");
str = str.replace(/\s+/g,' ').trim();//replace extra spaces in start, middle and end

fs.writeFile("a.txt",str,function(err)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log('Written succesfully');
    }
});