import { Directive, input } from "@angular/core";

@Directive({
  selector: "[aria-disabled]",
  host: {
    "[disabled]": "ariaDisabled()",
    "[attr.aria-disabled]": "ariaDisabled()",
  },
})
export class AriaDisabledCheckbox {
  ariaDisabled = input(false, {
    alias: "aria-disabled",
    transform: (value) => Boolean(value),
  });
}
