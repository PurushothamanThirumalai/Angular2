import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CustomerService} from './service/customer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  dataobject:any;
  constructor(private userData: CustomerService){

    
    
  }
 
  SaveCustomer(data:any)
  {
     console.warn(data);
    this.userData.saveUser(data).subscribe((result)=>{
      console.warn(result);
    })
  
  }
    
  
  }

  


