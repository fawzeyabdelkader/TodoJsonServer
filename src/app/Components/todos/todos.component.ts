import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../Models/to-do';
import { ToDoService } from '../../Services/to-do.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos: ToDo[] = [];
  newTodo: ToDo = {} as ToDo;

  constructor(private _ToDoService: ToDoService) {}
  ngOnInit(): void {
    this.getToDos();
  }
  getToDos() {
    this._ToDoService.getTodos().subscribe((x) => {
      this.todos = x;
    });
  }
  createToDo(): void {
    const newToDo1 = {
      id: this.newTodo.id,
      title: this.newTodo.title,
      completed: false,
    };
    this.newTodo = newToDo1;
    this._ToDoService.createToDo(newToDo1).subscribe((todo) => {
      this.todos.push(todo);
    });
  }

  deleteToDo(todoId: string): void {
    this._ToDoService.deleteToDo(todoId).subscribe(() => {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    });
  }
}
