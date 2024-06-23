import { Routes } from '@angular/router';
 import { TodosComponent } from './Components/todos/todos.component';
import { TodoDetailsComponent } from './Components/todo-details/todo-details.component';
 import { NotfoundComponent } from './Components/notfound/notfound.component';

export const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
   { path: 'todos', component: TodosComponent,title:'Todos' },
  { path: 'todos/:id', component: TodoDetailsComponent,title:'to do Details' },
 
  { path: '**', component: NotfoundComponent,title:'Not Found' },

 ];
