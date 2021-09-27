var app = new Vue({
    el: '#root',
    data: {
      todoList:[
        {
            name: "Fare i compiti",
            done: true
        },
        {
            name: "Fare la spesa",
            done: false
        },
        {
            name: "Fare il bucato",
            done: true
        }
        ],
       newToDoThing:"",
    },

    methods: {
        addNewTodo: function(){
            if(this.newToDoThing !== ""){
                this.todoList.push({
					name: this.newToDoThing,
					done: false
				});
                this.newToDoThing = "";
            }
        },
        
        // nel html "indexTodo" segnato come "index"
        removeTodo: function(indexTodo ){
            this.todoList.splice(indexTodo, 1);
        },
    },
})

