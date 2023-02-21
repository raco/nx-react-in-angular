import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { TodosComponent } from './todos/todos.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
  },
];
