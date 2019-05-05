import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddempComponent } from './addemp/addemp.component';
import { TodoComponent } from './todo/todo.component';
import { CalcComponent } from './calc/calc.component';
import { HomeComponent } from './aboutus/home.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'addemp', component: AddempComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'calc', component: CalcComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
