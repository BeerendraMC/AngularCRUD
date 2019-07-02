import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
/* Dependencies
    npm install primeng --save
    npm install primeicons --save
    npm install @angular/cdk --save
*/
export class GridComponent implements OnInit {

  @Input() columnsToDisplay: Array<{field: string; header: string}>;
  @Input() dataSource: any[];
  @Input() rows ? = 5;
  @Input() rowsPerPageOptions?: number[] = [5, 10, 20, 30];
  @Input() caption?: string;
  @Input() displayCheckbox = false;
  selectedRows: any[];
  constructor() { }

  ngOnInit() {
  }

}

