import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../IEmployee';
import { Router } from '@angular/router';
import { GridConfig } from '../shared/grid-material/grid-material.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  message = '';
  gridConfiguration: GridConfig[];
  caption: string;
  Employees: IEmployee[];
  displayedColumns: string[];
  colsToDisplay: {field: string; header: string}[];
  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit() {
    this.colsToDisplay = [
      {field: 'id', header: 'Id'},
      {field: 'Name', header: 'Name'},
      {field: 'Gender', header: 'Gender'},
      {field: 'Phone', header: 'Phone'},
      {field: 'Email', header: 'Email'}
    ];
    this.displayedColumns = ['checkbox', 'id', 'Name', 'Gender', 'Phone', 'Email'];
    this.caption = 'Employees List';
    this.gridConfiguration = [
      { name: 'checkbox', label: '' },
      { name: 'id', label: 'Id', sort: true },
      { name: 'Name', label: 'Name', sort: true },
      { name: 'Gender', label: 'Gender', sort: true },
      { name: 'Phone', label: 'Phone', sort: true },
      { name: 'Email', label: 'Email', sort: true },
    ];
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
        this.message = err.message;
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

  deleteEmp(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      () => {
        this.getAllEmps();
      },
      err => {
        console.error(err);
      }
    );
  }
}
