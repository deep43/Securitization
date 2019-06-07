import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {RegistrationComponent} from './pages/registration/registration.component';
import {AccountManagementComponent} from './pages/account-management/account-management.component';
import {LoginComponent} from './pages/login/login.component';
import {MainLayoutComponent} from './pages/main-layout/main-layout.component';
import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component';
import {ForgotUsernameComponent} from './pages/forgot-username/forgot-username.component';
import {AccountMobileManagementComponent} from './pages/account-mobile-management/account-mobile-management.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomepageComponent,
      },
      {
        path: 'register',
        component: RegistrationComponent,
      },
      {
        path: 'account',
        component: AccountManagementComponent,
      },
      {
        path: 'accountmobile',
        component: AccountMobileManagementComponent,
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent,
  },
  {
    path: 'forgotusername',
    component: ForgotUsernameComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
