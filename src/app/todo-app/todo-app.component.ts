import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  moduleId: module.id,
  selector: 'app-todo-app',
  templateUrl: 'todo-app.component.html',
  styleUrls: ['todo-app.component.css'],
  providers: [TodoService]
})
export class TodoAppComponent implements OnInit {

  newTodo: Todo = new Todo();

  constructor(private _todoService: TodoService) {}

  addTodo() {
    this._todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this._todoService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this._todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this._todoService.getAllTodos();
  }

  ngOnInit() {
  }

}
