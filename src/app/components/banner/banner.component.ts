import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  providers: [NgbCarouselConfig]
})
export class BannerComponent implements OnInit {
  bannerTitle = 'ASSET-BACKED COMMERCIAL PAPER (ABCP)';
  showNavigationArrows = false;
  showNavigationIndicators = false;
  pageLoaded = false;
  images = [
    'assets/images/Banner/calgary2x.jpg',
    'assets/images/Banner/montreal2x.jpg',
    'assets/images/Banner/ottawa2x.jpg',
    'assets/images/Banner/toronto2x.jpg',
    'assets/images/Banner/vancouver2x.jpg',
    'assets/images/Banner/winnipeg2x.jpg',
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private router: Router,
              private route: ActivatedRoute,
              config: NgbCarouselConfig,
              private breakpointObserver: BreakpointObserver) {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.router.url === '/register' ? this.bannerTitle = 'REGISTRATION' :
        this.bannerTitle = 'ASSET-BACKED COMMERCIAL PAPER (ABCP)';
    });

    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
    setTimeout(()=>{
      this.pageLoaded = true;
    }, 800);
  }

}
