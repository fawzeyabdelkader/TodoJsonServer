import { Routes } from '@angular/router';
 import { TodosComponent } from './Components/todos/todos.component';
import { TodoDetailsComponent } from './Components/todo-details/todo-details.component';
 import { NotfoundComponent } from './Components/notfound/notfound.component';

export const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
   { path: 'todos', component: TodosComponent,title:'TodoJsonServer' },
  { path: 'todos/:id', component: TodoDetailsComponent,title:'Todo JsonServer Details' },

  { path: '**', component: NotfoundComponent,title:'Not Found' },

 ];
