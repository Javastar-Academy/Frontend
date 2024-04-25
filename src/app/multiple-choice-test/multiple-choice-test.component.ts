import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-multiple-choice-test',
    templateUrl: './multiple-choice-test.component.html',
    styleUrls: ['./multiple-choice-test.component.css']
})
export class MultipleChoiceTestComponent {
    @Input() test: any = null;
}
