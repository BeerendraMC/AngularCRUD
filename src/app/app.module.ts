import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EmployeeListComponent,
    CreateEmpTDComponent,
    CreateEmpRFComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
