let userEmail = '  lco12  ';
let password = '1234';

let userCheck = function(myString){
    if(myString.includes(123) && (myString.length > 6)){
        return true;
    }else{
        return false;
    }
}

console.log(password.length);
console.log(userEmail.trim());
console.log(userCheck('Utkarsh'));

let passChecker = function(pass) {
    if ((pass.include(1234)) && (pass.length > 8) ){
      return true;  
    }
    else
        return false;
}