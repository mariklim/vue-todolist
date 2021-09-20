var app = new Vue({
    el: '#root',
    data: {
      todoList:[
        ],
       newToDoThing:"",
    },
    methods: {
        addNewTodo: function(){
            this.todoList.push(this.newToDoThing)
        }
    },
})
