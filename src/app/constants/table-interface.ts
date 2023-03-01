export interface TableData {
  data: any[];
  // columns: TableColumn[];
}

export interface TableColumn {
  label?: string;
  key?: string;
  _id?: string;
  sortname?: string;
  name?: string;
}
