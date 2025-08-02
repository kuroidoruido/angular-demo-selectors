import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { Baby } from "./baby";
import { Ninja } from "./ninja";
import { Wizard } from "./wizard";
import { ListDemo, ListDemo2 } from "./list-demo";
import { Table } from "./table";
import { TransactionsTable } from "./table2";
import { AriaDisabledCheckbox } from "./aria-disabled-checkbox";

@Component({
  selector: "app-root",
  imports: [
    Baby,
    Ninja,
    Wizard,
    ListDemo,
    ListDemo2,
    Table,
    TransactionsTable,
    AriaDisabledCheckbox,
  ],
  template: `
    <fieldset>
      <legend>Basics</legend>

      <app-baby>Hello from {{ name }}!</app-baby>
      <h1>Hello from {{ name }}!</h1>
      <h2>Hello from {{ name }}!</h2>
      <h3 app-wizard>Hello from {{ name }}!</h3>
      <h3 id="app-wizard">Hello from {{ name }}!</h3>
      <h3 class="app-wizard">Hello from {{ name }}!</h3>
      <h3 role="heading">Hello from {{ name }}!</h3>
    </fieldset>

    <fieldset>
      <legend>List</legend>

      <app-list-demo />
      <app-list-demo2 />
    </fieldset>

    <fieldset>
      <legend>Table</legend>

      <app-table [data]="tableData" />
      <app-transactions-table [data]="tableData" />
    </fieldset>

    <fieldset>
      <legend>Checkboxes</legend>

      <label
        ><input type="checkbox" [aria-disabled]="false" />
        [aria-disabled]="false"</label
      >
      <label
        ><input type="checkbox" [aria-disabled]="true" />
        [aria-disabled]="true"</label
      >
    </fieldset>
  `,
})
export class App {
  name = "Angular";

  tableData = [
    { id: "1", label: "one", amount: 100000000 },
    { id: "2", label: "two", amount: 1340000 },
    { id: "3", label: "three", amount: 1009877500 },
    { id: "4", label: "four", amount: 98475800000 },
  ];
}

bootstrapApplication(App);
