import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

type response = { success, message, value };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, private httpClient: HttpClient) { };

  message: string = undefined;
  view: string = 'login';
  errorStyle: string = '#f2f2f2';

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
    setTimeout(() => {
      var loginQuery = (this.view == 'register') ? document.querySelector('#loginQuery') : undefined;
      loginQuery.addEventListener('input', (event: KeyboardEvent) => {
          this.httpClient.post('/createLoginRequest', { value: (event.target as HTMLInputElement).value })
            .subscribe((result) => {
              console.log(result);
              if((result as response).success && (result as response).value.length > 3) {
                this.errorStyle = '#4CAF50';
              } else if((result as response).value.length > 3){
                this.errorStyle = 'rgb(244, 67, 54)';
              }
              //console.log((result as response).message);
            })
        });
    }, 1000);

  }

  auth(event, login, password) {
    event.preventDefault();
    this.message = undefined;
    this.httpClient.post('/login', { login, password })
      .subscribe(
        (data: any) => {
          if (data.success) {
            localStorage.setItem('token', data.id_token);
            this.router.navigate(['header/home']);
            console.log(`success: ${data.success}`);
          }
          else {
            console.log(`success: ${data.success}`);
            this.message = data.message;
          }
        },
        error => {
          console.log(error.text());
        }
      );
  }

  registration(event, user) {
    this.message = undefined;
    event.preventDefault();

    this.httpClient.post('/reg', { user: user })
      .subscribe(
        (data: any) => {
          if (data.success) {
            localStorage.setItem('token', data.id_token);
            this.router.navigate(['header/home']);
            console.log(`success: ${data.success}`);
          }
          else {
            console.log(`success: ${data.success}`);
            return this.message = data.message;
          }
        },
        error => {
          console.log(error.text());
        });
  }
}


