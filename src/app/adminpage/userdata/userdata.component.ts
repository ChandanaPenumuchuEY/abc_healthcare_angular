import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent {
  users: any[] = [];
  constructor(private user: AuthService,private router: Router){
    this.user.getUsers()
    .subscribe((data: any) => {
      this.users = data;
    });
  
}

deleteUser(name:string){

 
this.user.deleteUser(name).subscribe(res=>{console.log(res)});
this.router.navigateByUrl("/userdata");
}
}
