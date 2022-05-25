import { Component } from '@angular/core';
import { typeOfField } from './shared/model/field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor:string="Sebastian Gomez";
  tipo:typeOfField= 1;
  label:string="";
}
