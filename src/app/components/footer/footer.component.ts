import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  highContrast = false;
  footerLinks = [
    {
      heading: 'CIBC Capital Markets Disclosures', col: "6", opened: false, class: '', links: [
        {name: 'CIBC World Markets Inc. is a Member of the Canadian Investor ProtectionFund'},
        {name: 'CIBC World Markets Corp. (U.S. Broker Dealer) Disclosures'},
        {name: 'Ownership Interest in TMX Group'},
        {name: 'CIBC World Markets Inc. Trade Matching Statement'},
        {name: 'The U.S. Foreign Account Tax Compliance Act (FATCA)'},
        {name: 'Dodd Frank Disclosures'},
        {name: 'Dodd Frank Complaints Mailbox'},
        {name: 'CIBC Capital Markets Best Execution Policy (Canada)'},
        {name: 'European Regulatory Disclosures'},
      ]
    },
    {
      heading: 'CIBC Websites', col: "3", opened: false, class: 'important-heading', links: [
        {name: 'Imperial Service'},
        {name: 'Imperial Investor Service'},
        {name: 'Investor\'s Edge'},
        {name: 'Wood Gundy'},
        {name: 'Private Wealth Management'},
        {name: 'CIBC U.S.'},
        {name: 'CIBC Rewards'},
        {name: 'Newcomers to Canada'},
        {name: 'Banking for International Students'},
        {name: 'CIBC Global Money Transfer'},
        {name: 'CIBC Foreign Cash Online'},
        {name: 'CIBC Precious Metals Online'},
        {name: 'CIBC Air Canada® AC'},
        {name: 'conversion™ Visa* Prepaid Card'}
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  toggleContrast(contrast, e) {
    e.preventDefault();
    e.stopPropagation();

    this.highContrast = contrast;
  }

  toggleMobileFooterLinks(footerLink, e){
    e.preventDefault();
    e.stopPropagation();

    footerLink.opened = !footerLink.opened;
  }
}
