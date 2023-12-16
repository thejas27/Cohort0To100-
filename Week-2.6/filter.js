function filter(arr,fn)
{
    let result = [];
    for(let i = 0; i < arr.length; i++)
    {
        if(fn(arr[i]))
        {
            result.push(arr[i]);
        }
    }
    return result;
}

let arr = ['Thejas', 'Shetty', 'Koushik'];

let res = filter(arr,(n) =>{
    if(n.toLowerCase().startsWith('t'))
    {
        return true;
    }
    else
    {
        return false;
    }
})

console.log(res);