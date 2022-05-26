import { Title } from '@angular/platform-browser';
import { LocationChangeEvent } from '@angular/common';

export enum typeOfField {
    TEXT,
    TEXTAREA,
    DATE,
    CHECKBOX,
    EMAIL,
    PASSWORD,
    RADIO,
    SUBMIT,
    NUMBER,
    MONETARY,
    ICON,
    FLOAT,
    BUTTON,
    SELECT
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
