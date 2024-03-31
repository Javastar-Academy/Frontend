import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //constructor() { }

  items: MenuItem[];
    constructor(private router: Router) {}

  ngOnInit(): void {
      this.items = [
        {
            label: 'Acasa',
            routerLink: '/home'
        },
        {
            label: 'Despre',
            routerLink: '/about'
        },
        {
            label: 'Cursuri',
            routerLink: '/courses'

        },
        {
            label: 'Contact',
            routerLink: '/contact'

        },
        {
            label: 'FAQ',
            routerLink: '/about'

        }
    ];
  }
    navigateToRegister(): void {
        this.router.navigate(['/register']);
    }
}


