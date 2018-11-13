import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public settingsItems: Array<Object> = [
    {
      title: 'Аватар:',
      value: 'http://www.putkavataru.com/',
      type: 'url'
    },
    {
      title: 'Имя:',
      value: 'Недим',
      type: 'text'
    },
    {
      title: 'Фамилия:',
      value: 'Суинов',
      type: 'text'
    },
    {
      title: 'Логин:',
      value: 'ned452',
      type: 'text'
    },
    {
      title: 'Пароль:',
      value: '12345678',
      type: 'password'
    },
    {
      title: 'Email:',
      value: 'nedim51@mail.ru',
      type: 'email'
    }
  ];

  out(arr) {
    console.log(this.settingsItems[0]);
    console.log(arr[0]);
  }
}
