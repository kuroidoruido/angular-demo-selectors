import { Component } from "@angular/core";

@Component({
  selector: "h2, [app-wizard], .app-wizard, #app-wizard, [role=heading]",
  template: `🧙‍♂️ <ng-content />`,
})
export class Wizard {}
