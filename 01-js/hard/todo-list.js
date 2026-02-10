/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
    todos  

    constructor(){
     todos = []
    }

    add(todo){
      todos.push(todo)
    }

    remove(indexOfTodo){
      todos.splice(indexOfTodo,1)
    }

    update(index, updatedTodo){

      if(index < todos.length)todos.splice(index,1,updatedTodo)
    }

    getAll(){
      return todos
    }
    
    get(indexOfTodo){
     if(indexOfTodo >= todos.length)return null
     return todos[indexOfTodo]
    }

    clear(){
      todos.splice(0,todos.length)
    }

}

module.exports = Todo;