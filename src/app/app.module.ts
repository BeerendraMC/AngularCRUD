import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmpTDComponent } from './create-emp-td/create-emp-td.component';
import { CreateEmpRFComponent } from './create-emp-rf/create-emp-rf.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeService } from './employee.service';
import { GridComponent } from './shared/grid/grid.component';

import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';

import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { GridMaterialComponent } from './shared/grid-material/grid-material.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EmployeeListComponent,
    CreateEmpTDComponent,
    CreateEmpRFComponent,
    HomeComponent,
    PageNotFoundComponent,
    GridComponent,
    GridMaterialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCheckboxModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
