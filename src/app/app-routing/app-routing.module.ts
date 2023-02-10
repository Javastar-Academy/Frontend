import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "../components/home/home.component";
import {CurriculumComponent} from "../components/curriculum/curriculum.component"; // CLI imports router

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'curiculum', component: CurriculumComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
