import { Component, input } from "@angular/core";

interface Transaction {
  id: string;
  label: string;
  amount: number;
}

@Component({
  selector: "app-table-headers",
  template: ` <thead>
    <tr>
      <th>Label</th>
      <th>Amount</th>
    </tr>
  </thead>`,
})
export class TableHeaders {}

@Component({
  selector: "app-table-row",
  template: ` <tr>
    <td>{{ data()?.label }}</td>
    <td>{{ data()?.amount }}</td>
  </tr>`,
})
export class TableRow {
  data = input<Transaction>();
}

@Component({
  selector: "app-table",
  imports: [TableHeaders, TableRow],
  template: `
    <table>
      <app-table-headers />
      <tbody>
        @for (transaction of data(); track transaction.id) {
        <app-table-row [data]="transaction" />
        }
      </tbody>
    </table>
  `,
})
export class Table {
  data = input<Transaction[]>();
}
