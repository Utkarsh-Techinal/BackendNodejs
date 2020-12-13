// ################################  Array vs Object ############################################

/*Both objects and arrays are considered “special” in JavaScript. Objects represent a special data type that is mutable and 
can be used to store a collection of data (rather than just a single value). Arrays are a special type of variable that is also 
mutable and can also be used to store a list of values */

let obj = {
    title : "intro",
    videoLength : 15,
    description : 'this is testing object for Js '
 }
 console.log(obj);  // Access whole the Object.
 console.log(obj.description); //specially a method you want to access.

 let LCO = {
    course : "JavaScript",
    price : 5000,
    duration: "5hrs",
    Instructor : "Hitesh Choudhary"
}
console.log(`Hey! we are coming up with a new course on ${LCO.course} with amount of ${LCO.price}`);