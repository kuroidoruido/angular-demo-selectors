import { Component } from "@angular/core";

@Component({
  selector: "app-list-item",
  template: `<li class="list-group-item"><ng-content /></li>`,
})
export class ListItem {}

@Component({
  selector: "app-list-demo",
  imports: [ListItem],
  template: `
    <ul class="list-group">
      <app-list-item>One</app-list-item>
      <app-list-item>Two</app-list-item>
      <app-list-item>Three</app-list-item>
      <app-list-item>Four</app-list-item>
    </ul>
  `,
})
export class ListDemo {}

// ===================================

@Component({
  selector: "[app-list-item]",
  template: `<ng-content />`,
  host: {
    class: "list-group-item",
  },
})
export class ListItem2 {}

@Component({
  selector: "app-list-demo2",
  imports: [ListItem2],
  template: `
    <ul class="list-group">
      <li app-list-item>One</li>
      <li app-list-item>Two</li>
      <li app-list-item>Three</li>
      <li app-list-item>Four</li>
    </ul>
  `,
})
export class ListDemo2 {}
