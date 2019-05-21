import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../IEmployee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  message = '';
  Employees: IEmployee[];
  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit() {
    this.getAllEmps();
  }

  getAllEmps() {
    this.message = 'Loading..';
    this.employeeService.getEmployees().subscribe(
      (employees: IEmployee[]) => {
        this.Employees = employees;
        this.message = '';
      },
      err => {
        console.error(err);
      }
    );
  }

  OnEditClick(type: string, id: number) {
    if (type === 'TDF') {
      this.router.navigate(['edittd', id]);
    } else if (type === 'RF') {
      this.router.navigate(['editrf', id]);
    }
  }
}
