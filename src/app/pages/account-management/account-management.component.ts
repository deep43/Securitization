import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../helpers/must-match.validator';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.scss']
})
export class AccountManagementComponent implements OnInit {
  config = {
    displayKey: 'name',
    search: false,
    height: 'auto',
    placeholder: 'Please Select',
  };
  client;
  clientDropdownOptions = [
    {id: 1, name: 'CIBC Capital Markets'},
  ];

  company;
  companyDropdownOptions = [
    {id: 1, name: 'CIBC Capital Markets'},
  ];

  country;
  countryDropdownOptions = [
    {id: 1, name: 'Canada'},
    {id: 2, name: 'England'},
    {id: 3, name: 'India'},
    {id: 4, name: 'Australia'},
  ];
  countryConfig = {...this.config, placeholder: 'Select a Country'};
  checkList = [
    {id: 1, checked: true, name: 'Safe Trust Series 1996-1'},
    {id: 2, checked: true, name: 'Sound Trust Series 1998-1'},
    {id: 3, checked: true, name: 'Sure Trust Series 2015-1'},
    {id: 4, checked: true, name: 'Stable Trust Series 2018-1'},
  ];
  allChecked = false;
  registerForm: FormGroup;
  myProfileForm: FormGroup;
  submitted = false;
  submittedMyProfile = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('newPassword', 'confirmPassword')
    });

    this.myProfileForm = this.formBuilder.group({
      company: ['', Validators.required],
      country: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      title: ['', Validators.required],
      //transit: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    }, {
      //validator: MustMatch('password', 'confirmPassword')
    });
    this.myProfileForm.patchValue({
      company: "1",
      country: '1',
      firstName: 'John',
      lastName: 'Smith',
      city: 'Toronto',
      title: 'Analyst',
      phone: '(416) 555-0188',
      email: 'joe.smith@company.com',
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  get fmp() { return this.myProfileForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

  onSubmitMyProfile() {
    this.submittedMyProfile = true;

    // stop here if form is invalid
    if (this.myProfileForm.invalid) {
      return;
    }

    return true;
  }
  selectionChanged(){
    this.checkList = this.checkList.map(item=> {
      item.checked = false;
      return item;
    });
  }
}
