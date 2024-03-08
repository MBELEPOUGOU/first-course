import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import du module de routage
import { routes } from './app.routes'; // Import des routes


import { LoginComponent } from './login/login.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentCreateComponent,
    StudentDetailsComponent,
    StudentEditComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes) // Ajout des routes dans les imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
