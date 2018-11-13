import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  defaultImage: string = 'https://pp.userapi.com/c845220/v845220719/12e05e/HT2PQer7l2U.jpg';
  user: object = [{ name: undefined, surname: undefined }];

  homeButton: object = {
    title: `Привет, ${this.user[0].name}`,
    title2: 'Главная',
    route: '/header/home'
   };
   
   exitButton: object = {
     title: 'Выйти',
     route: '/login',
     exit:  function() {
      localStorage.removeItem('token');
      console.log("Token is removed!");
     }
   };

  public menuItems: Array<Object> = [
    {
      title: 'Статистика',
      route: '/header/statistic'
    },
    {
      title: 'Лидеры',
      route: '/header/leaders'
    },
    {
      title: 'Настройки',
      route: '/header/settings'
    }
  ];
}