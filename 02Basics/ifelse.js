//scope of let and var.

//differene between let and var

let iAmGlobal = 'someValue'

if(true)
{
    var iAmLocal= 'someMoreValue'  // let is used for local and var is considered as global variable.
    iAmGlobal = 'superman'
    console.log(iAmGlobal);
    console.log(iAmLocal);
}
console.log(iAmLocal);
console.log(iAmGlobal);

