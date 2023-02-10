import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tovaWebsite';
  public data: any;
  private _array: Array<string>;
  public conditie: boolean;


  constructor(private http: HttpClient) {
    this.http.get('https://api.ipify.org').subscribe(data => {
      this.data = data;
      this._array = new Array<string>()
      this._array.push("Geani", "Gabriel", "Dumitrache");
      this.conditie = true;
    });
  }
  get array(): Array<string> {
    return this._array;
  }

  set array(value: Array<string>) {
    this._array = value;
  }
}

