import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isuservalid:boolean=false;
constructor(private loginAuth:AuthService,private router: Router){}
  loginSubmited(username:string,password:string){

    this.loginAuth.loginUser([username,password]).subscribe(res=>{
      if(res=='Failure')
      {
        alert("invalid credentials");
      }
      else{
        this.isuservalid=true;
        
        this.router.navigateByUrl("/userpage");
      }
      
    })
  }

}
