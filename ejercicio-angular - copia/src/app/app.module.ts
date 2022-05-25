import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FieldComponent } from './shared/components/field/field.component';
import { PersonaComponent } from './core/components/persona/persona.component';
import { FieldsComponent } from './shared/components/fields/fields.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { typeOfField } from './shared/model/field';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    PersonaComponent,
    FieldsComponent
  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  valor:string="abc";
  tipo:typeOfField= 1;

 }
