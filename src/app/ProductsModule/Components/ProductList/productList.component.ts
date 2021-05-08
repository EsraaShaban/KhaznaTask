import { Component } from '@angular/core';
import { ProductListModel } from './productListModel';

@Component({
  selector: 'product-list',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.scss'],
  providers: [ProductListModel]
})

export class ProductListComponent {

  constructor(public model: ProductListModel) {  }

}
