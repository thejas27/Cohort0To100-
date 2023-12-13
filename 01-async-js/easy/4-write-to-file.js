let fs = require("fs");
let data = "It was a good day";
fs.writeFile("b.txt",data, function(err)
{
    if(err)
    {
        console.log(err);

    }
    else
    {
        console.log("file written succesfully");
        console.log("the file has following contents:");
        console.log(fs.readFileSync("b.txt","utf-8"))
    }
})