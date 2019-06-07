import {Component, HostListener, OnInit, ViewChild, ChangeDetectorRef, OnDestroy} from '@angular/core';
import {BreakpointObserver, Breakpoints, MediaMatcher} from '@angular/cdk/layout';
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
  @ViewChild(HTMLElement) MobileToolbar: HTMLElement;
  toggleSideNav = false;
  toggleDropdown = false;
  headerMenuOpened = false;
  reportMenuOpened = false;
  isFireFox = false;
  isHandset$: MediaQueryList;
  /*isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );*/
  private _mobileQueryListener: () => void;

  constructor(private router: Router, private route: ActivatedRoute,
              private breakpointObserver: BreakpointObserver, changeDetectorRef:
                ChangeDetectorRef, media: MediaMatcher) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scroll(0, 0);
      this.headerMenuOpened = false;
      this.reportMenuOpened = false;
    });

    this.isHandset$ = media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.isHandset$.addListener(this._mobileQueryListener);

  }

  ngOnInit() {
    window.scroll(0, 0);

    if(/Android/.test(navigator.appVersion)){
      window.addEventListener("resize", function(){
        if(document.activeElement.tagName=="INPUT"){
          window.setTimeout(function(){
            document.activeElement['scrollIntoViewIfNeeded']();
          },0);
        }
      })
    }

    if(this.getBrowserName().indexOf('firefox') >= 0){
      this.isFireFox = true;
    }

  }

  getBrowserName(){
    return navigator['sayswho']= (function(){
      var ua= navigator.userAgent, tem,
        M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
      }
      if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge?)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera').replace('Edg ', 'Edge ');
      }
      M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
      if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
      return M.join(' ');
    })();
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

  toggleDrawer(e) {
    /*e.preventDefault();
    e.stopPropagation();*/

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

  clickedOutSearch(e) {
    if (this.headerMenuOpened) {
      this.headerMenuOpened = false;
      //this.MobileToolbar.focus();
    }
  }

}
