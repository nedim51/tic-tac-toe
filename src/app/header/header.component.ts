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

  user: object = [{ name: undefined, surname: undefined }];

  public menuItems: Array<Object> = [
    {
      title: 'Главная',
      route: '/header/home'
     },
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

  exitButton: object = {
    title: 'Выйти',
    route: '/login',
    exit:  function() {
     localStorage.removeItem('token');
     console.log("Token is removed!");
    }
  };

}
