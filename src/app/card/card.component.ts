import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  _ref: any;
  constructor() { }

  ngOnInit() {
  }

  removeObject(){
    this._ref.destroy();
  }

  save(){
    alert("saved successfully");
  }

}
