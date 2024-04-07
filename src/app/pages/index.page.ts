import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './(layout)/index.page.html',
})
export default class HomeComponent {
}
