import { Component, OnInit } from '@angular/core';
import { ApidataService } from './apidata.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApidataService]
})
export class AppComponent implements OnInit {
  title = 'latest';
  jsonData: any;

  constructor(private apiData: ApidataService) {}

  ngOnInit(): void {
    this.Apicall();


  }

  Apicall() {
    this.apiData.getdata().subscribe(
      (data: any) => {
        this.jsonData = data;
        console.log(this.jsonData);
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );

  }
}
