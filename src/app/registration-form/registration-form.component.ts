import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';

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

  constructor() { }

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
