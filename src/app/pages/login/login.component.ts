import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MustMatch} from '../../helpers/must-match.validator';
import {Router} from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerFormPart2: FormGroup;
  submittedPart2 = false;
  uNameFormControl = new FormControl('', [
    Validators.required
  ]);
  uPwdFormControl = new FormControl('', [
    Validators.required
  ]);


  matcher = new MyErrorStateMatcher();

  constructor( private router: Router) {
  }

  ngOnInit() {}

  onSubmit() {

    if(this.uNameFormControl.hasError('required') || this.uPwdFormControl.hasError('required')){
      return;
    }
    else {
      this.router.navigateByUrl("/");
    }
  }

}
