import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  addEmployee(employee:any){
    return this.http.post('http://localhost:3000/api/employees/add-employee/',employee);
  }

  listEmployee(){
    return this.http.get('http://localhost:3000/api/employees');
  }

  deleteEmployee(id:any){
    return this.http.delete('http://localhost:3000/api/employees/'+id);
  }

  getOneEmployee(id:any){
    return this.http.get('http://localhost:3000/api/employees/'+id);
  }

  updateEmployee(id:any,employee:any){
    return this.http.put('http://localhost:3000/api/employees/update-employee/'+id,employee);
  }


}
