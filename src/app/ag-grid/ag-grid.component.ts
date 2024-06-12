import { Component } from "@angular/core";
import {
  AgGridAngular,
  ICellRendererAngularComp,
} from "@ag-grid-community/angular";

import {
  ColDef,
  ValueGetterParams,
  ICellRendererParams,
} from "@ag-grid-community/core";
import { ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

@Component({
  standalone: true,
  template: `<button (click)="buttonClicked()">Push Me!</button>`,
})
export class CustomButtonComponent implements ICellRendererAngularComp {
  agInit(params: ICellRendererParams): void {}
  refresh(params: ICellRendererParams) {
    return true;
  }
  buttonClicked() {
    alert("clicked");
  }
}

@Component({
  selector: "app-ag-grid",
  templateUrl: "./ag-grid.component.html",
  styleUrl: "./ag-grid.component.scss",
})
export class AgGridComponent {
  modules = [];
  agInit(params: ICellRendererParams): void {}
  refresh(params: ICellRendererParams) {
    return true;
  }
  buttonClicked() {
    alert("clicked");
  }

  public rowData: any[] | null = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
  ];
  public columnDefs: ColDef[] = [
    {
      headerName: "Make & Model",
      valueGetter: (p: ValueGetterParams) => p.data.make + " " + p.data.model,
      flex: 2,
    },
    {
      field: "price",
      valueFormatter: (p) => "£" + Math.floor(p.value).toLocaleString(),
      flex: 1,
    },
    { field: "electric", flex: 1 },
    { field: "button", cellRenderer: CustomButtonComponent, flex: 1 },
  ];
  public themeClass: string = "ag-theme-quartz";
}
const gridDiv = document.querySelector<HTMLElement>("#myGrid")!;
