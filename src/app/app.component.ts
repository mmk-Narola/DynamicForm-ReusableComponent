import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TableData } from './constants/table-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'DynamicForm-ReusableComponent';

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
