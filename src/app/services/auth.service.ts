import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http : HttpClient) { }
  getdata(){
    return this.http.get('http://localhost:3000/info')
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
