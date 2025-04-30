import addTodo from './components/add-todo.js';
export default class View {
    constructor() {
      this.model = null;
      this.table = document.getElementById('table');
      this.addTodoFrom
      btn.onclick = () => this.addTodo('Titulo','Desc')
      
    }
  
    setModel(model) {
      this.model = model;
    }
  
    addTodo(title, description) {
      const todo = this.model.addTodo(title,description);
      todo.title = 'YOUTUBE';
    }
  }
  