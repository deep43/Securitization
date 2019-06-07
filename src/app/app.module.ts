import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import {HeaderModule} from './components/header/header.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SecuritizationTableComponent} from './components/Securitizationtable/Securitizationtable.component';
import { DisclaimerComponent } from './components/disclaimer/disclaimer.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ModalModule} from 'ngx-bootstrap';
import { AccountManagementComponent } from './pages/account-management/account-management.component';
import {MatTabsModule} from '@angular/material/tabs';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ForgotUsernameComponent } from './pages/forgot-username/forgot-username.component';
import {MatInputModule} from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ClickOutsideModule} from 'ng-click-outside';
import {ClickElsewhereDirective} from './shared/click-outside.directive';
import {AccountMobileManagementComponent} from './pages/account-mobile-management/account-mobile-management.component';
import {PhoneMaskDirective} from './helpers/phone-mask-directive';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    BannerComponent,
    SecuritizationTableComponent,
    DisclaimerComponent,
    RegistrationComponent,
    AccountManagementComponent,
    LoginComponent,
    MainLayoutComponent,
    ForgotPasswordComponent,
    AccountMobileManagementComponent,
    ForgotUsernameComponent,
    ClickElsewhereDirective,
    PhoneMaskDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SelectDropDownModule,
    HeaderModule,
    MatCheckboxModule,
    MatTabsModule,
    MatInputModule,
    ModalModule.forRoot(),
    FormsModule,
    NgbModule,
    ClickOutsideModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
