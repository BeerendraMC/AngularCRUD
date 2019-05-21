import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from './IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  apiURL = 'http://localhost:3000/employees';

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.apiURL);
  }

  addEmployee(employee: IEmployee): Observable<any> {
    return this.http.post<any>(this.apiURL, employee, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  getEmployee(id: number): Observable<IEmployee> {
    return this.http.get<IEmployee>(this.apiURL + '/' + id);
  }

  updateEmployee(employee: IEmployee): Observable<void> {
    return this.http.put<void>(`${this.apiURL}/${employee.id}`, employee, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
