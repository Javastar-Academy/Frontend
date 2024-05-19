import { Component, OnInit } from '@angular/core';
import {
    faBookOpen,
    faCog,
    faFileAlt,
    faHome,
    faInbox,
    faStar,
    faTachometerAlt,
    faTasks
} from '@fortawesome/free-solid-svg-icons';
import { UserProfile, UserService } from "../services/user.service";
import { Router } from "@angular/router";
import { TestsService } from '../services/test.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    profile: UserProfile | undefined;
    menuOpen = false;
    headerLogoHidden = false;

    faHome = faHome;
    faInbox = faInbox;

    courses: number[] = [];
    currentCourse: number | undefined;

    faCog = faCog;
    menuItems = [
        { name: 'Dashboard', icon: faTachometerAlt, active: true, href: "/dashboard/home" },
        { name: 'Teste', icon: faTasks, active: false, href: "/dashboard/tests" },
        { name: 'Cursuri', icon: faBookOpen, active: false, href: "/dashboard/courses" },
        { name: 'Materiale', icon: faFileAlt, active: false, href: "/dashboard/documentation" },
        { name: 'Note', icon: faStar, active: false, href: "/dashboard/grades" },
    ];

    constructor(private userService: UserService, public router: Router, private testService: TestsService) {
    }

    ngOnInit(): void {
        this.userService.getUserProfile().subscribe(profile => this.profile = profile);
        this.courses = this.testService.getCourses();
        console.log(this.courses + "<- courses")
        if (this.courses.length > 0) {
            this.currentCourse = this.courses[0]; // Default to the first course
        }
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }

    setActive(item: any) {
        this.menuItems.forEach(mi => mi.active = false);
        item.active = true;
    }

    setCurrentCourse(event: Event) {
        const target = event.target as HTMLSelectElement;
        this.currentCourse = Number(target.value);
        console.log(`Current course set to: ${this.currentCourse}`);
    }
}
