import {Component, OnInit, Input} from '@angular/core';
import {SafeTrust} from '../../shared/models/safe-trust';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-table',
  templateUrl: './Securitizationtable.component.html',
  styleUrls: ['./Securitizationtable.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        display: 'block',
      })),
      state('closed', style({
        display: 'none',
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
export class SecuritizationTableComponent implements OnInit {
  @Input() tableData: any[];
  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }

  toggleRow(row) {
    if (row.opened) {
      row.opened = false;
      return;
    }

    this.tableData = this.tableData.map( (tableRow) => {
      tableRow.opened = false;

      return tableRow;
    });

    row.opened = true;

  }

}
