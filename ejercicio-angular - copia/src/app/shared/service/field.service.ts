import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import { Field } from '../model/field';
import { fieldsList } from '../model/mock-fields';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor() { }

  getField():Observable<Field[]>{
      const fields = of(fieldsList);
      return fields; 
  }
}
