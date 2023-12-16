function map(arr, transformation)
{
    var result =[];
    for(let i = 0; i < arr.length;i++)
    {
        result.push(transformation(arr[i]));
    }
    return result;
}

let arr = [1, 2, 3, 4, 5];

arr = map(arr,(n) =>{
    return (n * 2);
})

console.log(arr);