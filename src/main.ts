import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Title } from './title';
import { Title2 } from './title2';

@Component({
  selector: 'app-root',
  imports: [Title, Title2],
  template: `
    <app-title>Hello from {{ name }}!</app-title>
    <h1>Hello from {{ name }}!</h1>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
