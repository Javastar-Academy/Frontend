import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CourseService} from "./services/course.service";
import { HomeComponent } from './components/home/home.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { IntersectionObserverModule } from 'ngx-intersection-observer';
import {FormsModule} from "@angular/forms";
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { Level1Component } from './components/level1/level1.component';
import { Level2Component } from './components/level2/level2.component';
import { EnrollComponent } from './components/enroll/enroll.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    ContactComponent,
    FaqComponent,
    Level1Component,
    Level2Component,
    EnrollComponent,
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    IntersectionObserverModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
