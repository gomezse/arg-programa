import { Field, typeOfField } from '../model/field';
import { FieldComponent } from '../components/field/field.component';

export const fieldsList:Field[] = [
 {
    value:"DNI",
    title:"null",
    type:typeOfField.TEXT,    
    required:false,
    readonly:true, 
    maxL:"8",
    
 } 
   ,
 {
    value:"32",
    title:'null',
    type:typeOfField.TEXT,
    required:false,
    readonly:true, 
    maxL:"3",
  
         
 }
    ,
 {    
    value:"(alias...)",
    title:'null',
    type:typeOfField.TEXT,
    required:false,
    readonly:true, 
    maxL:"8",  
 }
    ,
 {
    value:"1234.45666",
    title:"Numero Flotante",
    type:typeOfField.NUMBER,
    required:false,
    readonly:false, 
    cantDecimal:0.001,     
 }       
    ,
 {
    value:"1234.45666",
    title:"Numero Flotante",
    type:typeOfField.NUMBER,
    required:false,
    readonly:false, 
    cantDecimal:0.1,  
 }       

]