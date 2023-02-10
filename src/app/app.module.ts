import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import {CourseService} from "./services/course.service";
import { HomeComponent } from './components/home/home.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    CurriculumComponent,
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
