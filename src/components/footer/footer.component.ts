import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {

  getThisYear() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return currentYear;
  }

  constructor() {}

  ngOnInit() {}
}
