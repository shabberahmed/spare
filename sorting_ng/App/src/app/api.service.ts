import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
   apiUrl:string='https://randomuser.me/api?results=4'
   ApiCall():Observable<any>{
    return this.http.get(this.apiUrl);
   }
}
