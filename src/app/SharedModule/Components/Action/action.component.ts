import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionModel } from './actionModel';
import { IAction } from './iAction';

@Component({
  selector: 'action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
  providers: [ActionModel]
})

export class ActionComponent {

  @Input() public set data(data: IAction) {
    if(data)
      this.model.data = data;
  }
  @Output() public onClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(public model: ActionModel) {
    this.model.onClick.subscribe( () => this.onClick.emit() );
  }

}
