import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { RegistrationFormService } from './registration-form.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  month: Month[] = [
    {value: '1', viewValue: 'January'},
    {value: '2', viewValue: 'February'},
    {value: '3', viewValue: 'March'},
    {value: '4', viewValue: 'April'},
    {value: '5', viewValue: 'May'},
    {value: '6', viewValue: 'June'},
    {value: '7', viewValue: 'July'},
    {value: '8', viewValue: 'August'},
    {value: '9', viewValue: 'September'},
    {value: '10', viewValue: 'October'},
    {value: '11', viewValue: 'November'},
    {value: '12', viewValue: 'December'},
  ];

  date: Date[] = [];
  year: Year[] = [];
  public users: any = {};

  constructor(
    public registrationService: RegistrationFormService
  ) { }

  ngOnInit() {
    this.countDate();
    this.countYear();
  }

  countDate(){
    let str = [];
    for(let i=1; i <= 31; i++){
      str.push({value: i, viewValue: i});
    }
    this.date = str;
  }

  countYear(){
    let str = [];
    let date = new Date();
    let year = { year: date.getFullYear()}
    let year_end = year.year - 10
    let year_start = year_end - 40;
    for(let i=year_end; i >= year_start; i--){
      str.push({value: i, viewValue: i});
    }
    this.year = str;
  }

  save(registration){
    if (this.validate(registration)) {
      const param = {
        data: this.users
      };
      this.registrationService.saveRegistration(param).subscribe(response => {
        if(response.status === true){
          Swal.fire({
            title: "Registration Success.",
            type: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK',
            allowOutsideClick: false
          }).then((result) => {
            // disable form, hidden footer, show button login
          });
        }
        else{
          Swal.fire({
            title: "Registration Error.",
            text: "Please contact the administrator. Thank you.",
            type: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK',
            allowOutsideClick: false
          }).then((result) => {
            if (result.value) {
              return false;
            }
          });
        }
      });
    }
  }

  validate(form_item: NgForm){
    const value: any = form_item.form.value;
    if (value.phone_number === '' || value.phone_number === undefined || value.first_name === '' || value.first_name === undefined || value.last_name === '' || value.last_name === undefined || value.email === '' || value.email === undefined) {
      Swal.fire({
        title: "Registration Failed. Please enter all required form.",
        text: "Required form: Phone Number, First Name, Last Name, and Email.",
        type: 'warning',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
        allowOutsideClick: false
      }).then((result) => {
        if (result.value) {
          return false;
        }
      });
      return false;
    }
    else if (form_item.form.status === 'VALID') {
      return true;
    }
  }

}

export interface Month {
  value: string;
  viewValue: string;
}
export interface Date {
  value: string;
  viewValue: string;
}
export interface Year {
  value: string;
  viewValue: string;
}
