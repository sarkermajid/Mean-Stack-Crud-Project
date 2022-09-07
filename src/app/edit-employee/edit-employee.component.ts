import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  editEmployee:any
  id:any

  constructor(
    private formbuilder:FormBuilder,
    private routes:Router,
    private employeservice:EmployeeService,
    private url:ActivatedRoute
    ) {
      this.editEmployee = formbuilder.group({
        fullname : ['',Validators.required],
        username : ['',Validators.required],
        email: ['',Validators.required],
        department:['',Validators.required]
      })
    }

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
    this.employeservice.getOneEmployee(this.id).subscribe(data=>{
      this.editEmployee.patchValue(data);
    });
  }

  onSubmit(){
    this.employeservice.updateEmployee(this.id,this.editEmployee.value).subscribe((data:any)=>{
      this.routes.navigate(['/list-employee']);
    });
  }

}
