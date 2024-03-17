import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {'path': 'login', component: LoginComponent},
  {'path': 'signup', component: SignupComponent},
  {'path': 'dashboard', component: DashboardComponent},
  {'path': 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {'path': '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
