import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  content = 'panorama_fish_eye';
  player = 'cr';

  field = [[{ class: '', content: '' }, { class: '', content: '' }, { class: '', content: '' }],
           [{ class: '', content: '' }, { class: '', content: '' }, { class: '', content: '' }],
           [{ class: '', content: '' }, { class: '', content: '' }, { class: '', content: '' }]];

  add(i, j) {
    // this.message ='';
    if (!(this.field[i][j].content) && !(this.field[i][j].class)) {
      if (this.content == 'panorama_fish_eye') {
        this.player= 'cr';
        this.content = 'clear';
      }
      else if (this.content == 'clear') {
        this.content = 'panorama_fish_eye';
        this.player= 'zr';
      }
      this.field[i][j].class = this.player;
      this.field[i][j].content = this.content;
    }
  }
}
