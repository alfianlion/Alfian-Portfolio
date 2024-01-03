import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  public href: string = "";
  public linkArray: String[] = [""];

  constructor(private router: Router) {}

  ngOnInit() {
      this.href = this.router.url;
      this.linkArray = this.splitURL(this.href);
  }

  splitURL (url: string) : String[] {
    let splitURL = url.split("/")
    splitURL.shift();
    return splitURL;
  }
}
