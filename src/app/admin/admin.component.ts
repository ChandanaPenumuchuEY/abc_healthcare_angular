import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  id:string="";
constructor(private user:AuthService,private router: Router)
{}
adminlogin(username:string,password:string){
  this.user.adminUser([username,password]).subscribe(res=>{
    if(res=='Failure')
    {
      alert("invalid credentials");
    }
    else{
      
      this.router.navigateByUrl("/add");
    }
    
  })
}
}
