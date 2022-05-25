import { Component, OnInit } from '@angular/core';
import { FieldService } from '../../service/field.service';
import { Field } from '../../model/field';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit {
  fields:Field[] =[];
 
  constructor( private fieldService:FieldService) { }

  ngOnInit(): void {
    // this.fieldService.getField().subscribe((fieldss)=>(this.fields = fieldss));
  }

}
