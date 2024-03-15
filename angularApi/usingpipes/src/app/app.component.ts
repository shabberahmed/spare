import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('para') p:any ;
  title = 'usingpipes';
  name:string='ahmed'
  age:string='1-12-22'
  val:any=222
  dataFromChild:any=''
  To(data: any) {
    this.dataFromChild = data;
    console.log(data);
    console.log(this.p.nativeElement.innerHTML);
  }
  // cc(){
  //   console.log(this.p)
  // }
}
