import { Component, Input, OnInit } from '@angular/core';
import { TableData, TableColumn } from 'src/app/constants/table-interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: any[];
  @Input() columns: string[];

  constructor() {}

  ngOnInit(): void {}
}
