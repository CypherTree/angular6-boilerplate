import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  private image: CatImage = {
    message: 'Hello Cat!',
    api: 'https://cataas.com/cat/says/',
    fontsize: 35
  };
  public src: string;
  ngOnInit() {
    this.generateSrc();
  }
  generateSrc(): void {
    this.src = this.image.api + this.image.message +
      '?size=' + this.image.fontsize + '&t=md'+
      '&ts=' + Date.now();
  }
}
class CatImage {
  message: string;
  api: string;
  fontsize: number;
}