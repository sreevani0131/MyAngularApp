import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray, AbstractControl, NgForm, FormsModule } from '@angular/Forms';
import { AppRoutingModule } from './app-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddempComponent } from './addemp/addemp.component';
import { TodoComponent } from './todo/todo.component';
import { CalcComponent } from './calc/calc.component';
import { HomeComponent } from './aboutus/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AboutusComponent,
    AddempComponent,
    TodoComponent,
    CalcComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
