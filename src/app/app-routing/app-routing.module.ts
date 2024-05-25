import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "../components/home/home.component";
import {AboutComponent} from "../components/about/about.component";
import {CoursesComponent} from "../components/courses/courses.component";
import {DashboardCoursesComponent} from "../dashboard/courses/dashboard-courses.component";
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
import {RoleGuard} from "../role.guard";
import {TestsComponent} from "../dashboard/tests/tests.component";
import {Course} from "../common/course";
import {DocumentationComponent} from "../dashboard/documentation/documentation.component";
import {GradesComponent} from "../dashboard/grades/grades.component";
import {DashboardHomeComponent} from "../dashboard/dashboard-home/dashboard-home.component";
import {TestViewComponent} from "../dashboard/test-view/test-view.component";
import {ProfileComponent} from "../dashboard/profile/profile.component"; // CLI imports router

const routes: Routes = [
    // redirects
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    // free website
    {path: 'faq', component: FaqComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'level1', component: Level1Component},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'level2', component: Level2Component},
    {path: 'enroll', component: EnrollComponent},
    // dashboard
    {
        path: 'admin-dashboard',
        component: AdminDashboardComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: {role: 'ADMIN'}
    },
    {path: 'dashboard/tests', component: TestsComponent},
    {path: 'dashboard/courses', component: DashboardCoursesComponent},
    {path: 'dashboard/documentation', component: DocumentationComponent},
    {path: 'dashboard/grades', component: GradesComponent},
    {path: 'dashboard/home', component: DashboardHomeComponent},
    { path: 'test-view/:id', component: TestViewComponent },
    { path: 'dashboard/profile', component: ProfileComponent },  // Add the route for the Profile component

];

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
