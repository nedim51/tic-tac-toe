import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router, private share: ShareService) {
  }

  ngOnInit() {
    
  }

  public onlineUserItems: Array<Object> = [
    {
      avatar: 'https://pp.userapi.com/c845220/v845220719/12e05e/HT2PQer7l2U.jpg',
      name: 'Петя',
      level: '3',
      score: '24',
      icon: 'touch_app'
    },
    {
      avatar: 'https://pp.userapi.com/c845220/v845220719/12e05e/HT2PQer7l2U.jpg',
      name: 'Вася',
      level: '4',
      score: '54',
      icon: 'close'
    },
    {
      avatar: 'https://pp.userapi.com/c851320/v851320575/435ee/dkZlsZgAP7k.jpg',
      name: 'Наташа',
      level: '1',
      score: '14',
      icon: 'close'
    },
    {
      avatar: 'https://pp.userapi.com/c845220/v845220719/12e05e/HT2PQer7l2U.jpg',
      name: 'Коля',
      level: '6',
      score: '62',
      icon: 'touch_app'
    },
    {
      avatar: 'https://pp.userapi.com/c851320/v851320575/435ee/dkZlsZgAP7k.jpg',
      name: 'Маша',
      level: '4',
      score: '54',
      icon: 'touch_app'
    }];

  message;

}
