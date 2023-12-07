import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  email: string;
  selectedLanguage: any;
  languages = [
    { name: 'Romana', code: 'RO', icon:'ro.png' },
    { name: 'English', code: 'EN' }
];

  ngOnInit() {
    this.languages = [
        { name: 'Romana', code: 'RO', icon:'ro.png' },
        { name: 'English', code: 'EN' }
    ];
    this.selectedLanguage = this.languages[0];
}
}
