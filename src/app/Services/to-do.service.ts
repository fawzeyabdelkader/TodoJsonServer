import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../Models/to-do';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private apiUrl = 'http://localhost:3000/todos';
  constructor(private _HttpClient: HttpClient) {}


  // get All ToDos
  getTodos(): Observable<ToDo[]> {
    return this._HttpClient.get<ToDo[]>(this.apiUrl);
  }

  // create ToDo
  createToDo(todo:ToDo):Observable<ToDo>
  {
    return this._HttpClient.post<ToDo>(this.apiUrl,JSON.stringify(todo));
  }

  // get ToDo by id
  getToDoById(id:string):Observable<ToDo>
  {
    return this._HttpClient.get<ToDo>(`${this.apiUrl}/${id}`);
  }

  // update ToDo
  updateToDo(todo:ToDo):Observable<ToDo>
  {
    return this._HttpClient.put<ToDo>(`${this.apiUrl}/${todo.id}`,todo);
  }

  // delete ToDo
  deleteToDo(todoId:string):Observable<void>
  {
    return this._HttpClient.delete<void>(`${this.apiUrl}/${todoId}`);
  }
}
