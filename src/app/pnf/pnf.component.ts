import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pnf',
  templateUrl: './pnf.component.html',
  styleUrls: ['./pnf.component.css']
})
export class PNFComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  route: object = { route: '/header/home' }; // проверить canActive[]; а только потом переходить на home

}
