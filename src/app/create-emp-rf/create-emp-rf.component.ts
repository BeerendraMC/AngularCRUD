import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IEmployee } from '../IEmployee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-emp-rf',
  templateUrl: './create-emp-rf.component.html',
  styleUrls: ['./create-emp-rf.component.css']
})
export class CreateEmpRFComponent implements OnInit {

  title: string;
  btnName: string;
  empForm: FormGroup;
  employee: IEmployee = {
    id: null,
    Name: '',
    Gender: '',
    Phone: '',
    Email: ''
  };
  constructor(private fb: FormBuilder,
              private employeeService: EmployeeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.empForm = this.fb.group({
      Name: ['', Validators.required],
      Gender: ['Male'],
      Phone: ['', Validators.required],
      Email: ['', Validators.required]
    });

    this.route.paramMap.subscribe(
      param => {
        const empId = +param.get('id');
        if (empId) {
          this.getEmployee(empId);
          this.btnName = 'Update';
          this.title = 'Edit Employee';
        } else {
          this.btnName = 'Save';
          this.title = 'Create Employee';
        }
      }
    );

  }

  getEmployee(id: number) {
    this.employeeService.getEmployee(id).subscribe(
      (employee: IEmployee) => {
        this.setEmployeeModel(employee);
      },
      err => {
        console.error(err);
      }
    );
  }

  setEmployeeModel(employee: IEmployee) {
    this.empForm.patchValue({
      Name: employee.Name,
      Gender: employee.Gender,
      Phone: employee.Phone,
      Email: employee.Email
    });
    this.employee.id = employee.id;
  }

  onsubmit() {
    if (this.employee.id) {
      this.mapFormValuesToEmployeeModel();
      this.employeeService.updateEmployee(this.employee).subscribe(
        () => {
          this.router.navigate(['list']);
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.mapFormValuesToEmployeeModel();
      this.employeeService.addEmployee(this.employee).subscribe(
        () => {
          this.empForm.reset();
        },
        err => {
          console.error(err);
        }
      );
    }
  }

  mapFormValuesToEmployeeModel() {
    this.employee.Name = this.empForm.value.Name;
    this.employee.Gender = this.empForm.value.Gender;
    this.employee.Phone = this.empForm.value.Phone;
    this.employee.Email = this.empForm.value.Email;
  }

}
