import { EventEmitter, Injectable } from "@angular/core";
import { IAction } from "./iAction";

@Injectable()
export class ActionModel {

  //====================Data===============
  public data: IAction = {} as IAction;

   //===================Events===============
  public onClick: EventEmitter<void> = new EventEmitter<void>();

  public click() {
    this.onClick.emit();
  }

}
