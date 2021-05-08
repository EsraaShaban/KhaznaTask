import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActionType } from '../Action/enums';
import { IAction } from '../Action/iAction';
import { TableModel } from './tableModel';

@Component({
  selector: 'dynamic-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableModel]
})

export class TableComponent {

  @Input() public set columns(items: Array<any>) {
    if(items)
      this.model.columns = items;
  }
  @Input() public set dataSource(arr: MatTableDataSource<any>) {
    this.model.dataSource = arr;
  }
  @Input() public set hasActions(hasActions: boolean) {
    this.model.hasActions = hasActions;
  }
  @Input() public set actions(actions: Array<ActionType>) {
    if(actions)
      this.model.actions = actions;
  }
  @Input() public set actionData(actionData: IAction) {
    this.model.actionData = actionData;
  }

  @Output() public onSort: EventEmitter<any> = new EventEmitter<any>();
  @Output() public onClickAction: EventEmitter<any> = new EventEmitter<any>();

  constructor(public model: TableModel) {
    this.model.onSort.subscribe( value => this.onSort.emit(value) );
    this.model.onClickAction.subscribe( value => this.onClickAction.emit(value) );
  }

  ngOnInit(): void {
    if(this.model.hasActions) {
      this.model.displayedColumns = ['actions'];
      this.model.displayedColumns.unshift(...this.model.columns);
    }
    else
      this.model.displayedColumns.unshift(...this.model.columns);
  }

}
