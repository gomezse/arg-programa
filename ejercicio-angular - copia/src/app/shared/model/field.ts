import { Title } from '@angular/platform-browser';
import { LocationChangeEvent } from '@angular/common';

export enum typeOfField {
    TEXT,
    CHECKBOX,
    NUMBER,
    MONETARY,
    ICON,
    FLOAT
}

export interface Field {
    value:string;
    title?:string;
    type:typeOfField;
    required?: boolean;
    readonly?: boolean;
    cantDecimal?:number;
    maxL?:string;
   
}
