import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CourseService} from "./services/course.service";
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {IntersectionObserverModule} from 'ngx-intersection-observer';
import {FormsModule} from "@angular/forms";
import {RegisterComponent} from './components/register/register.component';
import {AboutComponent} from './components/about/about.component';
import {CoursesComponent} from './components/courses/courses.component';
import {FaqComponent} from './components/faq/faq.component';
import {Level1Component} from './components/level1/level1.component';
import {Level2Component} from './components/level2/level2.component';
import {EnrollComponent} from './components/enroll/enroll.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {ChipModule} from 'primeng/chip';
import {ScrollTopModule} from 'primeng/scrolltop';
import {NewsletterComponent} from './components/newsletter/newsletter.component';
import {InputTextModule} from 'primeng/inputtext';
import {FooterComponent} from './components/footer/footer.component';
import {DropdownModule} from 'primeng/dropdown';
import {TestimonialsComponent} from './components/testimonials/testimonials.component';
import {PaginatorModule} from 'primeng/paginator';
import {ContactComponent} from './components/contact/contact.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CheckboxModule} from 'primeng/checkbox';
import {AccordionModule} from 'primeng/accordion';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatCardModule} from "@angular/material/card";
import {RippleModule} from "primeng/ripple";
import {LoginComponent} from "./components/login/login.component";
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {SidebarModule} from "primeng/sidebar";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {TestsComponent} from "./dashboard/tests/tests.component";
import {DocumentationComponent} from "./dashboard/documentation/documentation.component";
import {GradesComponent} from "./dashboard/grades/grades.component";
import {DashboardCoursesComponent} from "./dashboard/courses/dashboard-courses.component";
import {DashboardHomeComponent} from './dashboard/dashboard-home/dashboard-home.component';
import { TestViewComponent } from './dashboard/test-view/test-view.component';
import {ProfileComponent} from "./dashboard/profile/profile.component";
import {DashboardFooterComponent} from "./dashboard/dashboard-footer/dashboard-footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    FaqComponent,
    Level1Component,
    Level2Component,
    EnrollComponent,
    NavbarComponent,
    NewsletterComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    TestimonialsComponent,
    ContactComponent,
    DashboardComponent,
      AdminDashboardComponent,
      TestsComponent,
      DocumentationComponent,
      GradesComponent,
      DashboardCoursesComponent,
      DashboardHomeComponent,
      TestViewComponent,
      ProfileComponent,
    DashboardFooterComponent
  ],

  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    IntersectionObserverModule,
    FormsModule,
    ButtonModule,
    MenubarModule,
    ChipModule,
    ScrollTopModule,
    InputTextModule,
    DropdownModule,
    BrowserAnimationsModule,
    PaginatorModule,
    InputTextareaModule,
    CheckboxModule,
    AccordionModule,
    MatCardModule,
      RippleModule,
      BrowserModule,
      BrowserAnimationsModule,
      SidebarModule,
      FontAwesomeModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
