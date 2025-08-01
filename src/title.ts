import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `<h1><ng-content/></h1>`,
})
export class Title {}
