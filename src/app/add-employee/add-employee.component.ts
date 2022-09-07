import { Component, OnInit } from '@angular/core';
import { FormBuilder, MaxValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(
    private formbuilder:FormBuilder,
    private routes:Router,
    private employeservice:EmployeeService
    ) {
      this.addEmployee = formbuilder.group({
        fullname : ['',Validators.required],
        username : ['',Validators.required],
        email: ['',Validators.required],
        department:['',Validators.required]
      })
    }

  addEmployee:any
  ngOnInit(): void {
  }

  onSubmit(){
    this.employeservice.addEmployee(this.addEmployee.value).subscribe((data:any)=>{
      this.routes.navigate(['/list-employee']);
    });
  }
}
