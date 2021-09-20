var app = new Vue({
    el: '#root',
    data: {
      todoList:[
        ],
       newToDoThing:"",
    },
    methods: {
        addNewTodo: function(){
            if(this.newToDoThing !== ""){
                this.todoList.push(this.newToDoThing)
                this.newToDoThing = "";
            }
        },
        removeTodo: function(index){
            this.todoList.splice(index, 1);
        },
       
    },
})

