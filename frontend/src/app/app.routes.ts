import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Register } from './register/register';
import { Login} from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Admindashboard } from './admindashboard/admindashboard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'register', component: Register },
    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard },
    { path: 'admindashboard', component: Admindashboard},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
