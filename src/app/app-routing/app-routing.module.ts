import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "../components/home/home.component";
import {AboutComponent} from "../components/about/about.component";
import {CoursesComponent} from "../components/courses/courses.component";
import {ContactComponent} from '../components/contact/contact.component';
import {FaqComponent} from "../components/faq/faq.component";
import {Level1Component} from "../components/level1/level1.component";
import {Level2Component} from "../components/level2/level2.component";
import {RegisterComponent} from "../components/register/register.component";
import {LoginComponent} from "../components/login/login.component";
import {EnrollComponent} from "../components/enroll/enroll.component"; // CLI imports router
import {DashboardComponent} from "../dashboard/dashboard.component";
import {AuthGuard} from "../auth.guard";
import {AdminDashboardComponent} from "../admin-dashboard/admin-dashboard.component";
import {RoleGuard} from "../role.guard"; // CLI imports router

const routes: Routes = [
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'level1', component: Level1Component },
  { path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent},
  { path: 'level2', component: Level2Component },
  { path: 'enroll', component: EnrollComponent },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {role: 'ADMIN'}
  },
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard, RoleGuard], data: {role: 'STUDENT'}},
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
