import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor(
    private routes:Router,
    private employeeservice:EmployeeService
  ) { }


  ngOnInit(): void {
    this.loadEmployee();
  }

  employees:any
  loadEmployee(){
    this.employeeservice.listEmployee().subscribe((data:any)=>{
      this.employees = data;
    })
  }

  delete(datas:any){
    this.employeeservice.deleteEmployee(datas.id).subscribe((data:any)=>{
      console.log(data);
      this.employees = this.employees.filter((data:any)=>data!==datas);
    })
  }

  edit(){

  }
}
