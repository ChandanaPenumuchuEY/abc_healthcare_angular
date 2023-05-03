import { Component,ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  value:string=' ';
  constructor(private authservice:AuthService){ }
  registerSubmited(username:string,mail:string,
  contact:string,
  password:string){

   //this.username.toString(),this.email.toString(),this.contact.toString(),this.password.toString()
this.authservice.registerUser([username,mail,contact,password]).subscribe(res=>{
  console.log(res);
  
})
this.value="Successfully registered ! ";
  }

}
