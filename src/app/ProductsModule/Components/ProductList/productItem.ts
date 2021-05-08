import { ActionType } from "src/app/SharedModule/Components/Action/enums";

export class ProductItem {
  public name: string;
  public image: string;
  public quantity: number;
  public actions: Array<ActionType>;

  constructor() {
    this.actions = new Array<ActionType>();
  }
}
