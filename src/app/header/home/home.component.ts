import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    console.log(this.router.url);
  }
  public onlineUserItems: Array<Object> = [
    {
      name: 'Петя',
      level: '3',
      score: '24',
      icon: 'touch_app'
    },
    {
      name: 'Вася',
      level: '4',
      score: '54',
      icon: 'close'
    },
    {
      name: 'Коля',
      level: '1',
      score: '14',
      icon: 'close'
    },
    {
      name: 'Даша',
      level: '6',
      score: '62',
      icon: 'touch_app'
    },
    {
      name: 'Маша',
      level: '4',
      score: '54',
      icon: 'touch_app'
    }];


  message;
}
