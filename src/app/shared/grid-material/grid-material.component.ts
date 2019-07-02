import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-grid-material',
  templateUrl: './grid-material.component.html',
  styleUrls: ['./grid-material.component.css']
})
export class GridMaterialComponent implements OnInit {

  @Input() gridConfig: GridConfig[];
  @Input() displayedColumns: string[];
  @Input() dataSource: Array<any>;

  gridDataSource: any;
  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.gridDataSource = new MatTableDataSource(this.dataSource);
    this.gridDataSource.paginator = this.paginator;
    this.gridDataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.gridDataSource.filter = filterValue.trim().toLowerCase();

    if (this.gridDataSource.paginator) {
      this.gridDataSource.paginator.firstPage();
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.gridDataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.gridDataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

}

export interface GridConfig {
  name: string;
  label: string;
  style?: object;
  haslink?: boolean;
  sort?: boolean;
  filter?: boolean;
}
