import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, private httpClient: HttpClient) { };

  message: string = undefined;
  view: string = "login";

  ngOnInit() {

  }

  windowReady() {
    let i = 0;
    setTimeout(function () {
      let intervalId = setInterval(function () {
        window.scrollBy(0, 15);
        i++;
        if (i > 150) clearInterval(intervalId);
      }, 10);
    }, 100);
  }

  auth(event, login, password) {
    event.preventDefault();
    this.message = undefined;
    this.httpClient.post('/login', { login, password })
      .subscribe(
        (data: any) => {
          if (data.success) {
            localStorage.setItem('token', data.id_token);
            this.router.navigate(['header/home/menu']);
            console.log('Token added in local storage!');
          }
          else this.message = data.message;
        },
        error => {
          console.log(error.text());
        }
      );
  }

  registration(event, user) {
    console.log(user);

    this.message = undefined;
    event.preventDefault();

    if (user.name == "" || user.surname == "" || user.login == "" || user.password == "") return this.message = "Заполните все поля!";
    if (user.name.length > 30 || user.surname.length > 30) return this.message = "Имя и Фамилия не может содержать более 30 символов.";
    if (user.login.length < 4 || user.login.length > 20) return this.message = "Логин не может быть менее 4 и более 20 символов.";
    if (user.password.length < 8 || user.password.length > 30) return this.message = "Пароль не может быть менее 8 и более 30 символов.";

    this.httpClient.post('/reg', {user: user})
      .subscribe(
        (data: any) => {
          if (data.success) {
            localStorage.setItem('token', data.id_token);
            this.router.navigate(['header/home/menu']);
            console.log('Token added in local storage!');
          }
          else {
            return this.message = data.message;
          }
        },
        error => {
          console.log(error.text());
        });
  }
}


