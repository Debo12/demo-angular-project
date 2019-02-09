import { Component,OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import {CardComponent} from './card/card.component';
import * as $ from 'jquery';
import { container } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit(){
    
  }

  constructor(private _cfr: ComponentFactoryResolver){

  }

  @ViewChild('parent', {read: ViewContainerRef}) container: ViewContainerRef;

  addCard(){
    var comp = this._cfr.resolveComponentFactory(CardComponent);
    // Create component inside container
    var expComponent = this.container.createComponent(comp);
    // see explanations
    expComponent.instance._ref = expComponent;
  }
}
