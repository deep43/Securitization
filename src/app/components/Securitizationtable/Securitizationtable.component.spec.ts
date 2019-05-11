import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritizationTableComponent } from './Securitizationtable.component';

describe('SecuritizationTableComponent', () => {
  let component: SecuritizationTableComponent;
  let fixture: ComponentFixture<SecuritizationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritizationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritizationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
