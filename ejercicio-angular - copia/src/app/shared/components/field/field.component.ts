import { Component, OnInit, Input } from '@angular/core';
import { typeOfField, Field } from '../../model/field';
import { fieldsList } from '../../model/mock-fields';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  // @Input() field :Field = fieldsList[0];
  @Input() value:string | undefined;
  @Input() type:typeOfField | undefined;
  @Input() label:string |undefined;

  // type:typeOfField= fieldsList[0].type;
  // maxLength:any=fieldsList[0].maxL;
  
  
  constructor() { }

  ngOnInit(): void {
  
  
  }

}
