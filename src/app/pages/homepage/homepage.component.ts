import {Component, OnInit} from '@angular/core';
import {SafeTrust} from '../../shared/models/safe-trust';


const Securitization_TABLE_1: SafeTrust[] = [
  {
    name: 'Safe Trust Series 1996-1', date: 'Nov 30 2018', language: 'EN', opened: false,
    dates: [
      {dateText: 'Jan 31 2019'},
      {dateText: 'Dec 31 2018'},
      {dateText: 'Nov 30 2018'},
      {dateText: 'Oct 31 2018'},
      {dateText: 'Sep 30 2018'},
      {dateText: 'Aug 31 2018'},
      {dateText: 'Jun 30 2018'},
      {dateText: 'May 31 2018'},
      {dateText: 'Apr 30 2018'},
      {dateText: 'Mar 31 2018'},
    ]
  },
  {
    name: 'Safe Trust Series 1996-1', date: 'Nov 30 2018', language: 'EN', opened: false,
    dates: [
      {dateText: 'Jan 31 2019'},
      {dateText: 'Dec 31 2018'},
      {dateText: 'Nov 30 2018'},
      {dateText: 'Oct 31 2018'},
      {dateText: 'Sep 30 2018'},
      {dateText: 'Aug 31 2018'},
      {dateText: 'Jun 30 2018'},
      {dateText: 'May 31 2018'},
      {dateText: 'Apr 30 2018'},
      {dateText: 'Mar 31 2018'},
    ]
  },
  {
    name: 'Safe Trust Series 1996-1', date: 'Nov 30 2018', language: 'EN', opened: false,
    dates: [
      {dateText: 'Jan 31 2019'},
      {dateText: 'Dec 31 2018'},
      {dateText: 'Nov 30 2018'},
      {dateText: 'Oct 31 2018'},
      {dateText: 'Sep 30 2018'},
      {dateText: 'Aug 31 2018'},
      {dateText: 'Jun 30 2018'},
      {dateText: 'May 31 2018'},
      {dateText: 'Apr 30 2018'},
      {dateText: 'Mar 31 2018'},
    ]
  },
  {
    name: 'Safe Trust Series 1996-1', date: 'Nov 30 2018', language: 'EN', opened: false,
    dates: [
      {dateText: 'Jan 31 2019'},
      {dateText: 'Dec 31 2018'},
      {dateText: 'Nov 30 2018'},
      {dateText: 'Oct 31 2018'},
      {dateText: 'Sep 30 2018'},
      {dateText: 'Aug 31 2018'},
      {dateText: 'Jun 30 2018'},
      {dateText: 'May 31 2018'},
      {dateText: 'Apr 30 2018'},
      {dateText: 'Mar 31 2018'},
    ]
  }
];
const Securitization_TABLE_2: SafeTrust[] = [
  {
    name: 'Safe Trust Series 1996-1', date: 'Dec 10 2015', language: 'EN', opened: false,
    dates: [
      {dateText: 'Jan 31 2019'},
      {dateText: 'Dec 31 2018'},
      {dateText: 'Nov 30 2018'},
      {dateText: 'Oct 31 2018'},
      {dateText: 'Sep 30 2018'},
      {dateText: 'Aug 31 2018'},
      {dateText: 'Jun 30 2018'},
      {dateText: 'May 31 2018'},
      {dateText: 'Apr 30 2018'},
      {dateText: 'Mar 31 2018'},
    ]
  },
  {
    name: 'Safe Trust Series 1996-1', date: 'Dec 10 2015', language: 'EN', opened: false,
    dates: [
      {dateText: 'Jan 31 2019'},
      {dateText: 'Dec 31 2018'},
      {dateText: 'Nov 30 2018'},
      {dateText: 'Oct 31 2018'},
      {dateText: 'Sep 30 2018'},
      {dateText: 'Aug 31 2018'},
      {dateText: 'Jun 30 2018'},
      {dateText: 'May 31 2018'},
      {dateText: 'Apr 30 2018'},
      {dateText: 'Mar 31 2018'},
    ]
  },
  {
    name: 'Safe Trust Series 1996-1', date: 'Dec 10 2015', language: 'EN', opened: false,
    dates: [
      {dateText: 'Jan 31 2019'},
      {dateText: 'Dec 31 2018'},
      {dateText: 'Nov 30 2018'},
      {dateText: 'Oct 31 2018'},
      {dateText: 'Sep 30 2018'},
      {dateText: 'Aug 31 2018'},
      {dateText: 'Jun 30 2018'},
      {dateText: 'May 31 2018'},
      {dateText: 'Apr 30 2018'},
      {dateText: 'Mar 31 2018'},
    ]
  },
  {
    name: 'Safe Trust Series 1996-1', date: 'Dec 10 2015', language: 'EN', opened: false,
    dates: [
      {dateText: 'Jan 31 2019'},
      {dateText: 'Dec 31 2018'},
      {dateText: 'Nov 30 2018'},
      {dateText: 'Oct 31 2018'},
      {dateText: 'Sep 30 2018'},
      {dateText: 'Aug 31 2018'},
      {dateText: 'Jun 30 2018'},
      {dateText: 'May 31 2018'},
      {dateText: 'Apr 30 2018'},
      {dateText: 'Mar 31 2018'},
    ]
  },
  {
    name: 'Safe Trust Series 1996-1', date: 'Dec 10 2015', language: 'FR', opened: false,
    dates: [
      {dateText: 'Jan 31 2019'},
      {dateText: 'Dec 31 2018'},
      {dateText: 'Nov 30 2018'},
      {dateText: 'Oct 31 2018'},
      {dateText: 'Sep 30 2018'},
      {dateText: 'Aug 31 2018'},
      {dateText: 'Jun 30 2018'},
      {dateText: 'May 31 2018'},
      {dateText: 'Apr 30 2018'},
      {dateText: 'Mar 31 2018'},
    ]
  },
  {
    name: 'Safe Trust Series 1996-1', date: 'Dec 10 2015', language: 'FR', opened: false,
    dates: [
      {dateText: 'Jan 31 2019'},
      {dateText: 'Dec 31 2018'},
      {dateText: 'Nov 30 2018'},
      {dateText: 'Oct 31 2018'},
      {dateText: 'Sep 30 2018'},
      {dateText: 'Aug 31 2018'},
      {dateText: 'Jun 30 2018'},
      {dateText: 'May 31 2018'},
      {dateText: 'Apr 30 2018'},
      {dateText: 'Mar 31 2018'},
    ]
  },
  {
    name: 'Safe Trust Series 1996-1', date: 'Dec 10 2015', language: 'EN', opened: false,
    dates: [
      {dateText: 'Jan 31 2019'},
      {dateText: 'Dec 31 2018'},
      {dateText: 'Nov 30 2018'},
      {dateText: 'Oct 31 2018'},
      {dateText: 'Sep 30 2018'},
      {dateText: 'Aug 31 2018'},
      {dateText: 'Jun 30 2018'},
      {dateText: 'May 31 2018'},
      {dateText: 'Apr 30 2018'},
      {dateText: 'Mar 31 2018'},
    ]
  },
  {
    name: 'Safe Trust Series 1996-1', date: 'Dec 10 2015', language: 'FR', opened: false,
    dates: [
      {dateText: 'Jan 31 2019'},
      {dateText: 'Dec 31 2018'},
      {dateText: 'Nov 30 2018'},
      {dateText: 'Oct 31 2018'},
      {dateText: 'Sep 30 2018'},
      {dateText: 'Aug 31 2018'},
      {dateText: 'Jun 30 2018'},
      {dateText: 'May 31 2018'},
      {dateText: 'Apr 30 2018'},
      {dateText: 'Mar 31 2018'},
    ]
  },
  {
    name: 'Safe Trust Series 1996-1', date: 'Dec 10 2015', language: 'EN', opened: false,
    dates: [
      {dateText: 'Jan 31 2019'},
      {dateText: 'Dec 31 2018'},
      {dateText: 'Nov 30 2018'},
      {dateText: 'Oct 31 2018'},
      {dateText: 'Sep 30 2018'},
      {dateText: 'Aug 31 2018'},
      {dateText: 'Jun 30 2018'},
      {dateText: 'May 31 2018'},
      {dateText: 'Apr 30 2018'},
      {dateText: 'Mar 31 2018'},
    ]
  },
  {
    name: 'Safe Trust Series 1996-1', date: 'Dec 10 2015', language: 'FR', opened: false,
    dates: [
      {dateText: 'Jan 31 2019'},
      {dateText: 'Dec 31 2018'},
      {dateText: 'Nov 30 2018'},
      {dateText: 'Oct 31 2018'},
      {dateText: 'Sep 30 2018'},
      {dateText: 'Aug 31 2018'},
      {dateText: 'Jun 30 2018'},
      {dateText: 'May 31 2018'},
      {dateText: 'Apr 30 2018'},
      {dateText: 'Mar 31 2018'},
    ]
  }
];
const Securitization_TABLE_3: SafeTrust[] = [
  {
    name: 'Safe Trust Series 1996-1 Fact Sheet', date: 'Nov 30 2018', language: 'EN', opened: false,
    dates: [
      {dateText: 'Jan 31 2019'},
      {dateText: 'Dec 31 2018'},
      {dateText: 'Nov 30 2018'},
      {dateText: 'Oct 31 2018'},
      {dateText: 'Sep 30 2018'},
      {dateText: 'Aug 31 2018'},
      {dateText: 'Jun 30 2018'},
      {dateText: 'May 31 2018'},
      {dateText: 'Apr 30 2018'},
      {dateText: 'Mar 31 2018'},
    ]
  },
  {
    name: 'Safe Trust Series 1996-1 Fact Sheet', date: 'Nov 30 2018', language: 'EN', opened: false,
    dates: [
      {dateText: 'Jan 31 2019'},
      {dateText: 'Dec 31 2018'},
      {dateText: 'Nov 30 2018'},
      {dateText: 'Oct 31 2018'},
      {dateText: 'Sep 30 2018'},
      {dateText: 'Aug 31 2018'},
      {dateText: 'Jun 30 2018'},
      {dateText: 'May 31 2018'},
      {dateText: 'Apr 30 2018'},
      {dateText: 'Mar 31 2018'},
    ]
  },
  {
    name: 'Safe Trust Series 1996-1 Fact Sheet', date: 'Nov 30 2018', language: 'EN', opened: false,
    dates: [
      {dateText: 'Jan 31 2019'},
      {dateText: 'Dec 31 2018'},
      {dateText: 'Nov 30 2018'},
      {dateText: 'Oct 31 2018'},
      {dateText: 'Sep 30 2018'},
      {dateText: 'Aug 31 2018'},
      {dateText: 'Jun 30 2018'},
      {dateText: 'May 31 2018'},
      {dateText: 'Apr 30 2018'},
      {dateText: 'Mar 31 2018'},
    ]
  },
];

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {
  SecuritizationTable1 = Securitization_TABLE_1;
  SecuritizationTable2 = Securitization_TABLE_2;
  SecuritizationTable3 = Securitization_TABLE_3;
  SecuritizationTableTitle1 = 'INVESTOR REPORTS AND MONTHLY STATISTICS';
  SecuritizationTableTitle2 = 'Information Memorandums';
  SecuritizationTableTitle3 = 'Conduits Fact Sheets';

  constructor() {
  }

  ngOnInit() {
  }

}
