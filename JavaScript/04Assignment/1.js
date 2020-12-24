//Write the program to return the numbers divisible by 4 from the input list = [21, 24, 12, 34, 10, 15, 41]

let array=[21,24,12,34,10,15,41]
let a
for(let a =0; a <= array.length ;a++)
{
    if(array[a] % 4==0)
    {
       console.log(`${array[a]} is divisible by 4`);
    }

}