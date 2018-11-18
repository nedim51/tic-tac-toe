import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  
  constructor(private share: ShareService) { }

  gField;

  ngOnInit() {    
  }

  ngDoCheck() {
    this.gField = this.share.field;
  }
}
