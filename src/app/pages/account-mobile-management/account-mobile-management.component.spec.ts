import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMobileManagementComponent } from './account-management.component';

describe('AccountManagementComponent', () => {
  let component: AccountMobileManagementComponent;
  let fixture: ComponentFixture<AccountMobileManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountMobileManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMobileManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
