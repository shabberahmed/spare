import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { AsyncSubject, interval, of, range } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private P: MyserviceService) {
    this.bb.next('hello from async subject')
    this.bb.next('my my my')
  }

  // ngOnInit(): void {
  //   // this.send();
  //   this.P.obj.subscribe(
  //     (data: any) => console.log('BehaviorSubject:', data),
  //     (err) => console.error(err),
  //     () => console.log('BehaviorSubject completed')
  //   );

  //   this.P.obs.subscribe(
  //     (data: any) => console.log('Subject:', data),
  //     (err) => console.error(err),
  //     () => console.log('Subject completed')
  //   );
  // }

  // send() {
  //   this.P.obj.subscribe(
  //     (data: any) => console.log('BehaviorSubject:', data),
  //     (err) => console.error(err),
  //     () => console.log('BehaviorSubject completed')
  //   );
  //   this.P.obs.next('hello from subcribe simple')
  // }
  bb=new AsyncSubject()

  ngOnInit(): void {
    // interval(1000).subscribe(
    //   data=>console.log(data)
    // )
    this.bb.subscribe(
      data=>console.log(data)
    )
      setTimeout(() => {
        this.bb.complete()

      }, 2000);
  }
}
