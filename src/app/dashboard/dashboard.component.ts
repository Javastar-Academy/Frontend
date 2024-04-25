import {Component, OnInit} from '@angular/core';
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
import {UserProfile, UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    profile: UserProfile | undefined;


    menuOpen = false;
    headerLogoHidden = false;

    faHome = faHome
    faInbox = faInbox
    faCog = faCog

    menuItems = [
        {name: 'Dashboard', icon: faTachometerAlt, active: true, href: "/dashboard/home"},
        {name: 'Teste', icon: faTasks, active: false, href: "/dashboard/tests"},
        {name: 'Cursuri', icon: faBookOpen, active: false, href: "/dashboard/courses"},
        {name: 'Materiale', icon: faFileAlt, active: false, href: "/dashboard/documentation"},
        {name: 'Note', icon: faStar, active: false, href: "/dashboard/grades"},
    ];
    tabs = [
        {
            name: 'Informatii Generale',
            target: 'knowledge',
            content: 'Informatii generale privind cursul...',
            active: true
        },
        {
            name: 'Notare',
            target: 'activity',
            content: 'Informatii referitoare la metoda de notare (% si din ce)...',
            active: false
        }
    ];

    constructor(private userService: UserService, public router: Router) {
    }

    ngOnInit(): void {
        this.userService.getUserProfile().subscribe(profile => this.profile = profile);
    }


    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }

    setActive(item: any) {
        this.menuItems.forEach(mi => mi.active = false);
        item.active = true;
    }

    selectTab(tab: any) {
        this.tabs.forEach(t => t.active = false);
        tab.active = true;
    }
}
