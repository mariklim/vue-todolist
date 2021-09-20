var app = new Vue({
    el: '#root',
    data: {
      todoList:[
        ],
       newToDoThing:"",
       isActive : false,
    },

    methods: {
        addNewTodo: function(){
            if(this.newToDoThing !== ""){
                this.todoList.push(this.newToDoThing)
                this.newToDoThing = "";
            }
        },
        
        // nel html "indexTodo" segnato come "index"
        removeTodo: function(indexTodo ){
            this.todoList.splice(indexTodo, 1);
        },

        btnCompletIt: function(indexTodo){
            this.isActive = true;
        }
       
    },
})

