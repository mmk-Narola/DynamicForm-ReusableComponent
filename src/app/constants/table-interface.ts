export interface TableData {
  data: any[];
  columns: TableColumn[];
}

export interface TableColumn {
  label: string;
  key: string;
}
