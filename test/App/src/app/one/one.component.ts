import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnChanges {
  @Input() inputData:string=""
  @Output() myeve: EventEmitter<Array<any>> = new EventEmitter();
  data=[
    "shaik","ahmed","hello"
  ]
  ngOnChanges(changes: SimpleChanges): void {
      // console.log(changes['inputData'])
  }

  emitEvent() {
    this.myeve.emit(this.data);
  }

}
