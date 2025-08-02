import { Component, input } from "@angular/core";

interface Transaction {
  id: string;
  label: string;
  amount: number;
}

@Component({
  selector: "[app-transactions-table-headers]",
  template: `<tr>
    <th>Label</th>
    <th>Amount</th>
  </tr>`,
})
export class TransactionsTableHeaders {}

@Component({
  selector: "[app-transactions-table-row]",
  template: `<td>{{ data()?.label }}</td>
    <td>{{ data()?.amount }}</td>`,
})
export class TransactionsTableRow {
  data = input<Transaction>(undefined, { alias: "app-transactions-table-row" });
}

@Component({
  selector: "app-transactions-table",
  imports: [TransactionsTableHeaders, TransactionsTableRow],
  template: `
    <table>
      <thead app-transactions-table-headers></thead>
      <tbody>
        @for (transaction of data(); track transaction.id) {
        <tr [app-transactions-table-row]="transaction"></tr>
        }
      </tbody>
    </table>
  `,
})
export class TransactionsTable {
  data = input<Transaction[]>();
}
