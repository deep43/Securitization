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
  images = [
    'assets/images/new_banner_images/nova.jpg',
    'assets/images/new_banner_images/Quebec.jpg',
    'assets/images/new_banner_images/Quebec2.jpg',
    'assets/images/new_banner_images/toronto.jpg',
    'assets/images/new_banner_images/toronto4.jpg',
    'assets/images/new_banner_images/vancouver.jpg',
    'assets/images/new_banner_images/vancouver2.jpg'
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
  }

}
