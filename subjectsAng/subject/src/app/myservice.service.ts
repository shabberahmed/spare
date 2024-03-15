import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  obj = new BehaviorSubject<any>('hello from mbehavior subject');
obs=new Subject()
  constructor() {
    this.obs.next("hello from subject")
  }
}
