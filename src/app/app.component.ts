import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-names></app-names>
    <app-menu></app-menu>
    <app-card></app-card>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routes-angular';
}
