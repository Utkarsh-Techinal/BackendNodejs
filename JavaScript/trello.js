// $$$$$$$$$$$$$$$$$$$$$$$$  Version 1.0  $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// const myTodos=[]
// myTodos.push('Buy Bread')
// myTodos.push('Go to Gym')
// myTodos.forEach(function(todo, index)
// {
//    console.log(`Your task no. ${index} is: ${todo}`)
// })

/**************************** For Loop ***********************************************/
// array = ['Mon','Tues','Wednes','Thrus','Friday'];
// for (let index=0; index < array.length; index++){
//     const e = array[index];
//     console.log(e+index);
// }

let todo= {
   day: "Monday",
   meeting: 0,
   meetDone : 0
}

let addMeeting =function(todo , meet=0){
   todo.meeting = todo.meetings +meet;
   console.log(todo.meeting);
}

let meetDone = function(todo,meet=0){
   todo.meetDone = todo.meetDone - meet;
}

let getSummaryOfDay = function (todo){
   let meetLeft = todo.meeting - todo.meetDone;
}
addMeeting(todo , 2);
meetDone(todo , 1);
console.log(todo.meeting);
console.log(todo.meetDone);
