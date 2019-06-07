import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppHeaderComponent} from './app-header.component';
import {LayoutModule} from '@angular/cdk/layout';
import {RouterModule} from '@angular/router';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import {ClickOutsideModule} from 'ng-click-outside';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ClickOutsideModule
  ],
  declarations: [AppHeaderComponent],
  exports: [AppHeaderComponent]
})
export class HeaderModule {
}
