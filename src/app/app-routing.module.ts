import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'counter',
    component: CounterComponent,
    title: 'Counter Component'
  },
  {
    path: 'user-list',
    component: UserListComponent,
    title: 'User List Component'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404 - Page Not Found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
