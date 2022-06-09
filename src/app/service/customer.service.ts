import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url ="https://localhost:7247/api/Customer";
  constructor(private http:HttpClient) { }


  saveUser(data:any)
  {
    return this.http.post(this.url,data)
  }
}
