import { EventEmitter, Injectable } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { ActionType } from "../Action/enums";
import { IAction } from "../Action/iAction";

@Injectable()
export class TableModel {

  //====================Data===============
  public dataSource: MatTableDataSource<any>;
  public columns: Array<string> = new Array<string>();
  public displayedColumns: Array<string> = new Array<string>();
  public hasActions: boolean = false;
  public actions: Array<ActionType> = new Array<ActionType>();
  public actionData: IAction = { } as IAction;

  //===================Events===============
  public onSort: EventEmitter<any> = new EventEmitter<any>();
  public onClickAction: EventEmitter<any> = new EventEmitter<any>();

  constructor() {  }

  public sortData(data) {
    this.onSort.emit(data);
  }

  public clickAction(item) {
    this.onClickAction.emit(item);
  }
}
