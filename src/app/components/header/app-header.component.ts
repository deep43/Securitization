import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {MatSidenav} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss',
    '../../../assets/animations/animate.css'
  ],
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
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
    ]),
    trigger('openCloseReports', [
      // ...
      state('open', style({
        maxHeight: '178px',

        borderBottom: '1px solid #BBBCBC',
        borderTop: '1px solid #BBBCBC'
      })),
      state('closed', style({
        maxHeight: '0px',
      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
    ]),
  ]
})

export class AppHeaderComponent implements OnInit {
  @ViewChild(MatSidenav) drawer: MatSidenav;
  toggleSideNav = false;
  toggleDropdown = false;
  headerMenuOpened = false;
  reportMenuOpened = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private router: Router, private route: ActivatedRoute,
              private breakpointObserver: BreakpointObserver) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scroll(0, 0);
      this.headerMenuOpened = false;
      this.reportMenuOpened = false;
    });

  }

  ngOnInit() {
    window.scroll(0, 0);
  }

  toggleMobileDropdown() {
    this.toggleDropdown = !this.toggleDropdown;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 40) {
      const element = document.getElementById('sticky-header');
      element.classList.add('sticky');
      document.getElementById('menu-row').classList.add('header-sticked');
    } else {
      const element = document.getElementById('sticky-header');
      element.classList.remove('sticky');
      document.getElementById('menu-row').classList.remove('header-sticked');
    }
  }

  /*eventSubscription = Observable['fromEvent'](window, "scroll").subscribe(e => {
    this.onWindowScroll(e);
  });*/

  toggleDrawer() {
    this.drawer.toggle();
    this.toggleSideNav = !this.toggleSideNav;
  }

  openHeaderMenu(e) {
    e.preventDefault();
    e.stopPropagation();

    this.headerMenuOpened = !this.headerMenuOpened;
  }

  onReportClick(e) {
    e.preventDefault();
    e.stopPropagation();

    this.reportMenuOpened = !this.reportMenuOpened;
  }

  clickedOutSearch() {
    if (this.headerMenuOpened) {
      this.headerMenuOpened = false;
      //this.clearSearchBoxes();
    }
  }
}
