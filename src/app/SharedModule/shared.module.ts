import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../AngularMaterialModule/AngularMaterialModule";
import { ActionComponent } from "./Components/Action/action.component";
import { TableComponent } from "./Components/Table/table.component";

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  declarations: [
    TableComponent,
    ActionComponent
  ],
  exports: [
    TableComponent,
    ActionComponent
  ],
  providers: []
})

export class SharedModule { }
