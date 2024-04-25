import {Component} from '@angular/core';

@Component({
    selector: 'app-dashboard-home',
    templateUrl: './dashboard-home.component.html',
    styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent {

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
    ]

    selectTab(tab: any) {
        this.tabs.forEach(t => t.active = false);
        tab.active = true;
    }
}
