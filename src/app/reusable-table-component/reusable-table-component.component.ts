import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TableData } from '../constants/table-interface';

@Component({
  selector: 'app-reusable-table-component',
  templateUrl: './reusable-table-component.component.html',
  styleUrls: ['./reusable-table-component.component.scss'],
})
export class ReusableTableComponentComponent implements OnInit {
  data: any[];
  columns = ['_id', 'sortname', 'name'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<TableData>('http://192.168.100.89:4002/api/country')
      .subscribe((res: any) => {
        this.data = res.country;
      });
  }
}
