//                   Methods = Function in a class

let myTodo = {
    day: 'Monday',
    meetings : 0,
    meetDone: 0,
    addMeeting : function(num){
        this.meetings = this.meetings +num
            console.log(this );     //this refer to this object
    },
    addmeetDone : function(num){
        this.meetDone = this.meetDone - num
            console.log(this );     //this refer to this object
    },
    summary : function(){
        return `You have a meeting ${this.meetDone}`;
    }
}

let myTodoTwo = {
    day: 'Sunday',
    meetings : 0,
    meetDone: 0,
    addMeeting : function(){
            console.log(this );
    }
}


myTodo.addMeeting(4);
myTodo.addmeetDone(4);
console.log(myTodo.summary());