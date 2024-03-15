import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent {

  @Output() fromChild=new EventEmitter()
  send(){
    this.fromChild.emit('hello')
    
  }


}
