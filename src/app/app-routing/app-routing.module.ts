import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "../components/home/home.component";
import {AboutComponent} from "../components/about/about.component";
import {CoursesComponent} from "../components/courses/courses.component";
import { ContactComponent } from '../components/contact/contact.component';
import {FaqComponent} from "../components/faq/faq.component";
import {Level1Component} from "../components/level1/level1.component";
import {Level2Component} from "../components/level2/level2.component";
import {EnrollComponent} from "../components/enroll/enroll.component"; // CLI imports router

const routes: Routes = [
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'level1', component: Level1Component },
  { path: 'level2', component: Level2Component },
  { path: 'enroll', component: EnrollComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
