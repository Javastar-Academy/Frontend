import {Component} from '@angular/core';

@Component({
    selector: 'app-tests',
    templateUrl: './tests.component.html',
    styleUrls: ['./tests.component.css']
})
export class TestsComponent {
    courseWeeks: { number: number, test: string }[] = [
        // Add week objects using the structure { number: <weekNumber> }
        {
            number: 1,
            test: "unaBucataTest"
        },
        {
            number: 2,
            test: "unaBucataTest"
        },
        {
            number: 3,
            test: "unaBucataTest"
        },
        // Add as many week objects as needed
    ];
}
