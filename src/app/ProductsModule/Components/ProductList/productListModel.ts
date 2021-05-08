import { Injectable } from "@angular/core";
import { Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { BehaviorSubject } from "rxjs";
import { ActionType } from "src/app/SharedModule/Components/Action/enums";
import { IAction } from "src/app/SharedModule/Components/Action/iAction";
import { ProductItem } from "./productItem";

@Injectable()
export class ProductListModel {

  // ====================Data==================
  public hasActions: boolean = true;
  public displayedColumns: string[] = ['image', 'name', 'quantity'];
  public products: MatTableDataSource<ProductItem> = new MatTableDataSource<ProductItem>();
  public dataSubject = new BehaviorSubject<ProductItem[]>([]);
  public items: Array<ProductItem> = [
    {
      image: "<img src='https://hips.hearstapps.com/delish/assets/17/36/1504715566-delish-fettuccine-alfredo.jpg' />",
      name: "Pasta",
      quantity: 6,
      actions: [ActionType.Delete]
    },
    {
      image: "<img src='https://st.depositphotos.com/1900347/4146/i/600/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg' />",
      name: "Pizza",
      quantity: 4,
      actions: [ActionType.Delete]
    },
    {
      image: "<img src='https://c.ndtvimg.com/2020-04/6bpknrd8_chicken_625x300_10_April_20.jpg' />",
      name: "Chicken",
      quantity: 2,
      actions: [ActionType.Delete]
    }
  ];
  public actions: Array<ActionType> = new Array<ActionType>();
  public actionData: IAction = {} as IAction;

  constructor() {
    this.loadProducts();
  }

  // Load Products
  public loadProducts() {
    for (let product of this.items) {
    let temp: ProductItem = new ProductItem();
      temp.image = product.image;
      temp.name = product.name;
      temp.quantity = product.quantity;
      temp.actions = product.actions;
      if(product.actions) {
        this.actions = product.actions;
      }
      if(product.actions.includes(ActionType.Delete))
        this.actionData = {
          text: "delete",
          icon: "delete_outline",
          color: "#d32424"
        } as IAction;
      this.products.data.push(temp);
    }
  }

  // Click Action
  public clickAction(item) {
    console.log("item click ", item);
  }

  // Sort Table Data
  public sortData(sort: Sort) {
    let data = this.products.data.slice();
    if (!sort.active || sort.direction === '') {
      this.products.data = data;
      return;
    }
    this.products.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'quantity': return this.compare(a.quantity, b.quantity, isAsc);
        default: return 0;
      }
    });
    this.dataSubject.next(data);
  }

  private compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}
