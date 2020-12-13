// kings Problems

//let king = 'John'

if(true)
{
   //let king = 'Sam'

    if(true)
    { //if you have declare a variable then by default it takes it as global.
        king = 'Ram'  // now if, it is king is undeclared then it will jump up and where is my parent variable and in that case it print Sam. 
        console.log(king);
    }
}

if(true)
{
    console.log("I am second part : "+king)
}