import { Component } from '@angular/core';
import { ProductsModel } from './productsModel';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductsModel]
})

export class ProductsComponent {

  constructor(public model: ProductsModel) {}

}
