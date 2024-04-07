import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HeaderComponent from './components/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `<div class="container mx-auto">
             <app-header></app-header>
             <router-outlet></router-outlet>
             <!-- <app-footer></app-footer>  -->
             </div>
             `,
  styles: [
    `
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent {}
