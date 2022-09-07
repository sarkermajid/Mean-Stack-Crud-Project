import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// for route
import { Routes, RouterModule } from '@angular/router';
// for form
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// backend connected http
import { HttpClientModule } from '@angular/common/http';
// all component
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';

const routes: Routes = [
  {path: 'list-employee',component:ListEmployeeComponent},
  {path: 'add-employee',component:AddEmployeeComponent},
  {path: 'edit-employee/:id',component:EditEmployeeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ListEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
