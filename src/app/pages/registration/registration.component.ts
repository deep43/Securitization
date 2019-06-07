import {Component, OnInit, ViewChild} from '@angular/core';
import {BsModalService, ModalDirective} from 'ngx-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from '../../helpers/must-match.validator';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        maxHeight: '276px',
      })),
      state('closed', style({
        maxHeight: '0px',
      })),
      transition('open => closed', [
        animate('3s')
      ]),
      transition('closed => open', [
        animate('3s')
      ]),
    ]),
  ]
})
export class RegistrationComponent implements OnInit {
  @ViewChild('modal') modal: ModalDirective;
  registerForm: FormGroup;
  registerFormClient: FormGroup;
  registerFormPart2: FormGroup;
  submitted = false;
  submittedPart2 = false;
  nextDisabled = true;
  showCheckList2 = false;
  step = 3;
  config = {
    displayKey: 'name',
    search: false,
    height: 'auto',
    placeholder: 'Please Select',
  };
  isUSClient;
  dropdownOptions = [
    {id: 1, name: 'U.S. Client'},
  ];
  title = 'SORRY, YOU ARE INELIGIBLE';
  regSuccessNotificationOpened = false;
  checkList = [
    {id: 1, checked: false, name: 'I am a ‘U.S. person’ as defined in Regulation S of the United States Securities Act of 1933'},
    {
      id: 2,
      checked: false,
      name: 'I am a ‘major U.S. institutional investor’ as such term is defined in Rule 15a-6 of the Securities Exchange Act of 1934'
    }
  ];

  checkList2 = [
    {
      id: 3,
      checked: false,
      label: 'As a U.S. client',
      name: 'I understand and acknowledge that the information made available by CIBC Capital Markets on this website is for informational purposes only and not intended as an offer or solicitation with respect to the offer or sale of any securities'
    },
    {
      id: 4,
      checked: false,
      label: 'As a major U.S. institutional investor',
      name: 'I agree that any transactions effected by any security mentioned on this website will be effected through a qualified salesperson at CIBC Capital Markets in the U.S. or other U.S. registered broker dealer'
    },
  ];


  client;
  clientDropdownOptions = [
    {id: 1, name: 'CIBC Capital Markets'},
  ];

  company;
  companyDropdownOptions = [
    {id: 1, name: 'CIBC'},
  ];

  country;
  countryDropdownOptions = [
    {id: 1, name: 'Canada'},
    {id: 2, name: 'England'},
    {id: 3, name: 'India'},
    {id: 4, name: 'Australia'},
  ];
  countryConfig = {...this.config, placeholder: 'Select a Country'};

  constructor(private modalService: BsModalService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      //usClient: ['', Validators.required],
      company: ['', Validators.required],
      country: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      title: ['', Validators.required],
      userName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    }, {
      //validator: MustMatch('password', 'confirmPassword')
    });

    this.registerFormClient = this.formBuilder.group({
      //usClient: ['', Validators.required],
      company: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      /*city: ['', Validators.required],
      title: ['', Validators.required],
      country: ['', Validators.required],
      transit: ['', Validators.required],
      phone: ['', Validators.required ],*/
      email: ['', [Validators.required, Validators.email]],
    }, {
      //validator: MustMatch('password', 'confirmPassword')
    });
    this.registerFormClient.patchValue({
      company: "1",
    });

    this.registerFormPart2 = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      // reEmail: ['', [Validators.required, Validators.email]],
      // email: ['', [Validators.required, Validators.email]],
    }, {
      validator: [MustMatch('password', 'confirmPassword')]
        // MustMatch('email', 'reEmail')]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  get fClient() {
    return this.registerFormClient.controls;
  }

  get fPart2() {
    return this.registerFormPart2.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid || this.registerFormClient.invalid) {
      console.log(this.f.phone.errors);
      return;
    }

    return true;
  }

  onSubmitPart2() {
    this.submittedPart2 = true;

    // stop here if form is invalid
    if (this.registerFormPart2.invalid) {
      return;
    }

    this.step += 1;
    this.goToTopSection();
    if(this.step === 4){
      this.regSuccessNotificationOpened = true;

      setTimeout(()=>{
        this.closeRegSuccessNotification();
      }, 5000)
    }
    return true;
  }

  openIneligibleModal() {
    this.modal.show();
  }

  onCheckListChanged() {
    let checkedList = this.checkList.filter(item => {
      return item.checked;
    });

    // on the first step if all the checkboxes are not selected then open the modal
    if (checkedList.length === this.checkList.length) {
      this.nextDisabled = false;
    } else {
      this.nextDisabled = true;
      this.step = 1;
    }
  }

  goToTopSection(){
    let elmnt = document.getElementById("form-section");
    window.scrollTo(elmnt.scrollLeft, elmnt.scrollTop+300)
  }

  closeModal() {
    this.modal.hide();
  }

  onSelectionChanged(event) {
    //if (this.isUSClient && this.isUSClient.name === 'Yes') {
    if (event.target.value === '1') {
      this.step = 1;
    }
  }

  goNext() {
    if (!this.step) {
      return;
    }
    if (this.step === 1) {
      let checkedList = this.checkList.filter(item => {
        return item.checked;
      });

      if(!this.showCheckList2 && checkedList.length === 2){
        this.showCheckList2 = true;
        return;
      }

      let checkedList2 = this.checkList2.filter(item => {
        return item.checked;
      });

      // on the first step if all the checkboxes are not selected then open the modal
      if (checkedList.length !== this.checkList.length || checkedList2.length !== this.checkList2.length) {
        this.openIneligibleModal();
        return;
      }
    }

    if (this.step === 2 && !this.onSubmit()) {
      return;
    }

    this.step += 1;

    if(this.step > 1){
      this.goToTopSection();
    }
  }

  closeRegSuccessNotification(){
    this.regSuccessNotificationOpened = false;
  }

  goPrevious() {
    this.step -= 1;
    if(this.step > 0){
      this.goToTopSection();
    }
  }

  /*onPhoneKeyDown(event) {

    event.preventDefault();
    let key = event.key;

    if(Number(key) === 0){
      phoneNumber = phoneNumber.concat('0');
      updateInput();
    }

    if(!Number(key) && key !== 'Backspace' && Number(key) !== 0){
      return false;
    }

    if(Number(key) && phoneNumber.length < 10){
      phoneNumber = phoneNumber.concat(key);
      updateInput();
    }

    if( key === 'Backspace' ){
      phoneNumber = phoneNumber.slice(0, -1);
      updateInput();
    }
  };

  updateInput(){
    let arr = [];

    for(let i = 0; i < 10; i++){
      if(phoneNumber[i]){
        arr.push(phoneNumber[i]);
      }
      else{
        arr.push(' ');
      }
    }

    numberField.value = `(${arr.slice(0,3).join('')}) ${arr.slice(3,6).join('')}-${arr.slice(6,10).join('')}`;
    focus();
  }

  focus(){
    let focusNumber = 0;
    if(phoneNumber.length < 3 && phoneNumber.length >= 1){
      focusNumber = phoneNumber.length + 1;
    }
    else if(phoneNumber.length < 6){
      focusNumber = phoneNumber.length + 3;
    }
    else{
      focusNumber = phoneNumber.length + 4;
    }
    if(phoneNumber.length === 10) focusNumber = 14;
    numberField.setSelectionRange(focusNumber, focusNumber);
  }*/
}
