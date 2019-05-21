import { Component, OnInit, ViewChild } from '@angular/core';
import { IEmployee } from '../IEmployee';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-emp-td',
  templateUrl: './create-emp-td.component.html',
  styleUrls: ['./create-emp-td.component.css']
})
export class CreateEmpTDComponent implements OnInit {

  @ViewChild('fm') form: any;

  employee: IEmployee = {
    id: null,
    Name: '',
    Gender: 'Male',
    Phone: '',
    Email: '  '
  };
  title: string;
  btnName: string;
  constructor(private employeeService: EmployeeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      param => {
        const empId = +param.get('id');
        if (empId) {
          this.title = 'Edit Employee';
          this.btnName = 'Update';
          this.getEmp(empId);
        } else {
          this.title = 'Create Employee';
          this.btnName = 'Save';
        }
      }
    );
  }

  getEmp(id: number) {
    this.employeeService.getEmployee(id).subscribe(
      (employee: IEmployee) => {
        this.employee = employee;
      },
      err => {
        console.error(err);
      }
    );
  }

  onsubmit() {
    if (this.employee.id) {
      this.employeeService.updateEmployee(this.employee).subscribe(
        () => {
          this.router.navigate(['list']);
        },
        err => {
          console.error(err);
        }
      );
    } else {
      this.employeeService.addEmployee(this.employee).subscribe(
        () => {
          this.form.reset();
          this.employee = {
            id: null,
            Name: '',
            Gender: 'Male',
            Phone: '',
            Email: ''
          };
          // this.router.navigate(['list']);
        },
        err => {
          console.error(err);
        }
      );
    }
  }
}
